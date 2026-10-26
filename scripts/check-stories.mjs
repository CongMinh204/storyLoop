// Kiểm tra dữ liệu truyện, flashcard và Bloom trước khi đưa lên.
// Chạy ở thư mục gốc dự án: node scripts/check-stories.mjs
// Có lỗi thì in ra từng chỗ và thoát với mã 1. Không cần thêm thư viện: esbuild đã có sẵn cùng Vite.
import { build } from "esbuild";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Gom dữ liệu TypeScript thành một file JS rồi nạp vào Node
const bundled = await build({
  stdin: {
    contents: `
      export { STORY_LIBRARY } from "./src/app/data/library";
      export { getStoryScript } from "./src/app/data/stories";
      export { BLOOM_SETS } from "./src/app/data/bloom";
      export { LESSONS } from "./src/app/data/lessons";
    `,
    resolveDir: root, loader: "ts",
  },
  bundle: true, platform: "node", format: "esm", write: false, logLevel: "error",
  alias: { "@": path.join(root, "src") },
});
const tmp = mkdtempSync(path.join(tmpdir(), "storyloop-check-"));
const file = path.join(tmp, "data.mjs");
writeFileSync(file, bundled.outputFiles[0].text);
const { STORY_LIBRARY, getStoryScript, BLOOM_SETS, LESSONS } = await import(pathToFileURL(file).href);
rmSync(tmp, { recursive: true, force: true });

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const filled = s => typeof s === "string" && s.trim().length > 0;
// Số chữ Hán: dòng chỉ có dấu câu ("……") hoặc một tiếng kêu ("喵——") thì không cần pinyin / phụ đề
const hanCount = s => (s?.match(/\p{Script=Han}/gu) ?? []).length;

// Danh sách từ vựng hiện ra dưới dạng danh sách có key = chữ Hán, nên trong một danh sách không được trùng chữ
function checkVocab(where, list, { needEx = false } = {}) {
  if (!Array.isArray(list)) return err(where, "thiếu danh sách từ vựng");
  const seen = new Set();
  for (const v of list) {
    if (!filled(v.word) || !filled(v.vi)) err(where, `từ vựng thiếu chữ hoặc nghĩa: ${JSON.stringify(v)}`);
    if (seen.has(v.word)) err(where, `từ "${v.word}" bị lặp trong cùng danh sách`);
    seen.add(v.word);
    if (v.ex && !(filled(v.ex.zh) && filled(v.ex.py) && filled(v.ex.vi))) err(where, `câu ví dụ của "${v.word}" thiếu chữ Hán, pinyin hoặc nghĩa`);
    if (needEx && v.ex && !v.ex.zh.includes(v.word.split("…")[0])) warn(where, `câu ví dụ của "${v.word}" không chứa chính từ đó`);
  }
}

function checkAnalysis(where, a) {
  if (!a || !filled(a.structure) || !filled(a.explain)) err(where, "thiếu phân tích (structure / explain)");
}

function checkBranching(id, story) {
  const nodes = story.nodes;
  const keys = Object.keys(nodes);
  const stats = { scenes: keys.length, endings: 0, picks: 0, choices: 0 };
  if (!nodes[story.start]) err(id, `cảnh bắt đầu "${story.start}" không tồn tại`);

  for (const [key, n] of Object.entries(nodes)) {
    const w = `${id} › ${key}`;
    if (n.id !== key) err(w, `id trong cảnh là "${n.id}", khác khoá "${key}"`);
    const exits = [n.choices, n.next, n.ending].filter(Boolean).length;
    if (exits === 0) err(w, "cảnh cụt: không có lựa chọn, next hay ending");
    if (exits > 1) err(w, "cảnh có nhiều hơn một kiểu đi tiếp (choices / next / ending)");
    if (n.next && !nodes[n.next]) err(w, `next trỏ tới cảnh không tồn tại "${n.next}"`);
    if (n.ending) {
      stats.endings++;
      if (!filled(n.ending.title) || !filled(n.ending.titleVi)) err(w, "kết thúc thiếu tên (title / titleVi)");
    }
    if (n.choices) {
      if (n.choices.length < 2) warn(w, "chỉ có 1 lựa chọn");
      n.choices.forEach((c, i) => {
        const cw = `${w} › lựa chọn ${String.fromCharCode(65 + i)}`;
        stats.choices++;
        if (!nodes[c.next]) err(cw, `trỏ tới cảnh không tồn tại "${c.next}"`);
        if (!filled(c.zh) || !filled(c.py) || !filled(c.vi)) err(cw, "thiếu chữ Hán, pinyin hoặc phụ đề");
        checkAnalysis(cw, c.analysis);
        checkVocab(cw, c.vocab);
      });
    }
    if (!Array.isArray(n.lines) || n.lines.length === 0) warn(w, "cảnh không có dòng nào");
    (n.lines ?? []).forEach((l, i) => {
      const lw = `${w} › dòng ${i + 1}`;
      switch (l.kind) {
        case "narration":
          if (!filled(l.text)) err(lw, "lời dẫn rỗng");
          break;
        case "quote":
          if (!filled(l.zh)) err(lw, "thiếu chữ Hán");
          if (hanCount(l.zh) > 1 && !filled(l.vi)) warn(lw, "thiếu phụ đề tiếng Việt");
          if (hanCount(l.zh) > 1 && !filled(l.py)) warn(lw, "thiếu pinyin");
          break;
        case "npc":
          if (!filled(l.speaker) || !filled(l.zh) || !filled(l.vi)) err(lw, "lời thoại thiếu người nói, chữ Hán hoặc phụ đề");
          if (hanCount(l.zh) > 0 && !filled(l.py)) err(lw, "lời thoại thiếu pinyin");
          if (!(l.speaker in story.characters)) warn(lw, `nhân vật "${l.speaker}" chưa có emoji trong characters`);
          break;
        case "player":
          if (!filled(l.zh)) err(lw, "câu của người chơi rỗng");
          break;
        case "pick": {
          stats.picks++;
          const opts = l.options ?? [];
          if (opts.length < 2) err(lw, "bước chọn câu cần ít nhất 2 đáp án");
          const right = opts.filter(o => o.correct).length;
          if (right !== 1) err(lw, `bước chọn câu phải có đúng 1 đáp án đúng (đang có ${right})`);
          if (new Set(opts.map(o => o.zh)).size !== opts.length) err(lw, "có hai đáp án giống hệt nhau");
          opts.forEach((o, j) => {
            const ow = `${lw} › đáp án ${String.fromCharCode(65 + j)}`;
            if (!filled(o.zh) || !filled(o.py) || !filled(o.vi)) err(ow, "thiếu chữ Hán, pinyin hoặc phụ đề");
            checkAnalysis(ow, o.analysis);
            checkVocab(ow, o.vocab);
            if (!o.vocab?.length) warn(ow, "không có từ vựng nào");
          });
          break;
        }
        default:
          err(lw, `kiểu dòng không biết "${l.kind}"`);
      }
    });
  }

  // Mọi cảnh phải tới được từ cảnh bắt đầu
  const reached = new Set();
  const stack = [story.start];
  while (stack.length) {
    const k = stack.pop();
    if (reached.has(k) || !nodes[k]) continue;
    reached.add(k);
    nodes[k].choices?.forEach(c => stack.push(c.next));
    if (nodes[k].next) stack.push(nodes[k].next);
  }
  for (const k of keys) if (!reached.has(k)) err(`${id} › ${k}`, "không tới được từ cảnh bắt đầu");
  if (stats.endings === 0) err(id, "truyện không có kết thúc nào");

  // Vòng lặp làm thanh tiến độ và điểm số chạy sai
  const state = {};
  const visit = k => {
    if (!nodes[k]) return;
    if (state[k] === 1) return err(`${id} › ${k}`, "có vòng lặp quay lại cảnh này");
    if (state[k] === 2) return;
    state[k] = 1;
    nodes[k].choices?.forEach(c => visit(c.next));
    if (nodes[k].next) visit(nodes[k].next);
    state[k] = 2;
  };
  visit(story.start);

  checkVocab(`${id} › vocab`, story.vocab, { needEx: true });

  // Câu ví dụ của flashcard nên là câu có thật trong truyện (lời thoại, lời dẫn, lựa chọn hoặc đáp án), không tự bịa thêm
  const strip = s => s.replace(/[\s，。！？、；：“”‘’（）()…—·,.!?;:"'~～]/g, "");
  const corpus = strip(Object.values(nodes).flatMap(n => [
    ...(n.lines ?? []).flatMap(l => (l.kind === "pick" ? l.options.map(o => o.zh) : [l.zh ?? l.text ?? ""])),
    ...(n.choices ?? []).map(c => c.zh),
  ]).join("|"));
  for (const v of story.vocab ?? []) {
    if (v.ex && !corpus.includes(strip(v.ex.zh))) warn(`${id} › vocab`, `câu ví dụ của "${v.word}" không có trong truyện: ${v.ex.zh}`);
  }
  return stats;
}

function checkQuiz(id, turns) {
  turns.forEach((t, i) => {
    const w = `${id} › lượt ${i + 1}`;
    if (!filled(t.zh) || !filled(t.vi)) err(w, "lời thoại thiếu chữ Hán hoặc phụ đề");
    const right = (t.choices ?? []).filter(c => c.correct).length;
    if (right < 1) err(w, "không có đáp án đúng");
    (t.choices ?? []).forEach((c, j) => checkVocab(`${w} › đáp án ${String.fromCharCode(65 + j)}`, c.vocab));
  });
  return { turns: turns.length };
}

const BLOOM_ORDER = ["nhớ", "hiểu", "dùng", "viết"];
function checkBloom(id, set) {
  const w = `${id} › Bloom`;
  if (!set.items || set.items.length !== 4) return err(w, "phải có đúng 4 câu");
  set.items.forEach((it, i) => {
    const iw = `${w} › ${BLOOM_ORDER[i]}`;
    if (it.type !== BLOOM_ORDER[i]) err(iw, `câu thứ ${i + 1} phải là "${BLOOM_ORDER[i]}" (đang là "${it.type}")`);
    if (!filled(it.q) || !filled(it.story)) err(iw, "thiếu câu hỏi hoặc tên truyện");
    if (it.type === "nhớ" || it.type === "hiểu") {
      if (!(it.correct >= 0 && it.correct < (it.opts?.length ?? 0))) err(iw, "chỉ số đáp án đúng nằm ngoài danh sách");
      if (new Set(it.opts).size !== it.opts.length) err(iw, "có hai phương án giống nhau");
    }
    if (it.type === "hiểu" && it.optsVi?.length !== it.opts?.length) err(iw, "số phương án tiếng Việt khác số phương án chữ Hán");
    if (it.type === "dùng") {
      if (!it.tmpl?.includes("___")) err(iw, "câu mẫu thiếu chỗ trống ___");
      if (!filled(it.ans)) err(iw, "thiếu đáp án");
    }
    if (it.type === "viết") {
      if (typeof it.check !== "function") err(iw, "thiếu hàm check");
      else {
        if (it.check("")) err(iw, "câu trống mà vẫn được chấm đúng");
        if (!it.check(`我${it.word}这个很好。`)) err(iw, `câu có từ "${it.word}" mà bị chấm sai`);
      }
    }
  });
  // Mỗi cấp luyện một từ khác nhau
  const [nho, hieu, dung, viet] = set.items;
  const words = [nho.char, hieu.sent?.split(" (")[0], dung.ans, viet.word];
  if (new Set(words).size !== 4) err(w, `4 cấp phải dùng 4 từ khác nhau (đang là ${words.join(", ")})`);
  return words;
}

// ─── Chạy ───
const stories = Object.values(STORY_LIBRARY).flat();
const ids = new Set();
for (const s of stories) {
  if (ids.has(s.id)) err(`thư viện › ${s.id}`, "mã truyện bị trùng");
  ids.add(s.id);
}
for (const key of Object.keys(BLOOM_SETS)) {
  if (!ids.has(key)) err(`Bloom › ${key}`, "không có truyện nào mang mã này trong thư viện");
}

const report = [];
for (const s of stories) {
  const script = getStoryScript(s.id);
  if (!script) continue;
  const parts = [];
  if (script.kind === "branching") {
    const st = checkBranching(s.id, script.story);
    parts.push(`${st.scenes} cảnh`, `${st.endings} kết thúc`, `${st.picks} bước chọn câu`, `${st.choices} lựa chọn rẽ nhánh`);
  } else {
    const st = checkQuiz(s.id, script.turns);
    checkVocab(`${s.id} › vocab`, script.vocab);
    parts.push(`${st.turns} lượt hỏi đáp`);
  }
  const lesson = LESSONS.find(l => l.id === s.id);
  if (!lesson) err(s.id, "không có bài trong Phòng tập");
  else {
    if (lesson.cards.length === 0) warn(s.id, "chưa có thẻ flashcard nào (từ vựng cần có câu ví dụ ex)");
    parts.push(`${lesson.cards.length} thẻ flashcard`);
  }
  const bloom = BLOOM_SETS[s.id];
  if (!bloom) warn(s.id, "chưa có bộ Bloom");
  else parts.push(`Bloom: ${checkBloom(s.id, bloom).join(" / ")}`);
  report.push(`• ${s.title} (${s.id}): ${parts.join(", ")}`);
}

console.log("Truyện đã có kịch bản:");
report.forEach(r => console.log("  " + r));
if (warnings.length) {
  console.log(`\nCảnh báo (${warnings.length}):`);
  warnings.forEach(w => console.log("  ! " + w));
}
if (errors.length) {
  console.log(`\nLỗi (${errors.length}):`);
  errors.forEach(e => console.log("  ✗ " + e));
  process.exit(1);
}
console.log("\nKhông có lỗi.");
