import { Check, Flame, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { useViewer } from "../auth/viewer";

// Thẻ "Thử thách hàng ngày" ở trang chủ: kiếm đủ XP trong ngày thì server thưởng thêm, một lần mỗi ngày
// (luật ở server/src/stats.ts và progress/service.ts). Chỉ hiện khi đã đăng nhập: khách đã có lời nhắc đăng ký.
// compact = cỡ chữ của layout mobile.
export function DailyChallenge({ compact = false }: { compact?: boolean }) {
  const v = useViewer();
  if (!v.signedIn) return null;
  const { xp, goal, bonus, done } = v.daily;
  const reached = Math.min(xp, goal);
  const s = compact
    ? { pad: "12px 14px", gap: 10, box: 40, flame: 20, title: 12, titleMb: 2, badge: 8, badgePad: "1px 6px", desc: 10, chip: 10, chipPad: "5px 10px", chipGap: 3, zap: 10, reward: `+${bonus}` }
    : { pad: "14px 16px", gap: 12, box: 44, flame: 22, title: 13, titleMb: 3, badge: 9, badgePad: "1px 7px", desc: 11, chip: 11, chipPad: "6px 12px", chipGap: 4, zap: 12, reward: `+${bonus} XP` };
  return (
    <div style={{ background: C.rewardBg, border: `0.5px solid ${C.rewardBorder}`, borderRadius: 14, padding: s.pad, display: "flex", alignItems: "center", gap: s.gap }}>
      <div style={{ width: s.box, height: s.box, background: C.reward, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Flame size={s.flame} color={C.ink} /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: s.title, fontWeight: 700, color: C.ink, marginBottom: s.titleMb }}>
          Thử thách hàng ngày{" "}
          <span style={{ background: done ? C.successBg : C.rewardBorder, color: done ? C.success : C.ink, fontSize: s.badge, padding: s.badgePad, borderRadius: 20, marginLeft: 4, fontWeight: 600 }}>{done ? "Xong" : "Mới"}</span>
        </div>
        <div style={{ fontSize: s.desc, color: C.inkMuted }}>
          {done ? "Đã xong thử thách hôm nay, mai quay lại nhé!" : `Kiếm ${goal} XP hôm nay · ${reached}/${goal}`}
        </div>
        {!done && (
          <div style={{ height: 4, background: C.rewardBorder, borderRadius: 20, marginTop: 6 }}>
            <div style={{ height: 4, borderRadius: 20, background: C.rewardDeep, width: `${Math.round((reached / goal) * 100)}%`, transition: "width .4s" }} />
          </div>
        )}
      </div>
      {done ? (
        <div style={{ background: C.successBg, color: C.success, fontSize: s.chip, fontWeight: 700, padding: s.chipPad, borderRadius: 20, display: "flex", alignItems: "center", gap: s.chipGap, flexShrink: 0 }}><Check size={s.zap} /> Đã nhận</div>
      ) : (
        <div style={{ background: C.reward, color: C.ink, fontSize: s.chip, fontWeight: 700, padding: s.chipPad, borderRadius: 20, display: "flex", alignItems: "center", gap: s.chipGap, flexShrink: 0 }}><Zap size={s.zap} /> {s.reward}</div>
      )}
    </div>
  );
}
