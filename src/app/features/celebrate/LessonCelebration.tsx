import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { C, CTA_SHADOW } from "../../lib/colors";
import { useIsMobile } from "../../lib/useIsMobile";
import { Dialog } from "../../components/ui/dialog";
import type { CelebrationSteps } from "./useLessonCelebration";
import { StreakStep } from "./StreakStep";
import { QuestStep } from "./QuestStep";

// Hộp thoại sau khi kết thúc truyện: lần lượt màn chuỗi ngày rồi màn nhiệm vụ (bước nào không có thì bỏ),
// bấm "Tiếp tục" để sang bước sau, bước cuối thì đóng và quay lại thẻ kết thúc.
// Mobile phủ kín màn hình; desktop là thẻ giữa màn trên nền mờ, giống hộp đăng nhập (AuthScreen).
// Dùng Dialog của Radix: khoá cuộn nền, giữ focus trong hộp thoại, Esc để đóng.
export function LessonCelebration({ steps, onClose }: { steps: CelebrationSteps; onClose: () => void }) {
  const list = [
    ...(steps.streak !== null ? ["streak" as const] : []),
    ...(steps.quests.length ? ["quests" as const] : []),
  ];
  const [i, setI] = useState(0);
  const mobile = useIsMobile();
  const reduce = !!useReducedMotion();
  const step = list[i];
  const last = i >= list.length - 1;
  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, x: 48 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -48 } };

  return (
    <Dialog open onOpenChange={open => { if (!open) onClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-[rgba(25,62,65,.5)] backdrop-blur-[6px]" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          // Bấm nhầm ra ngoài không làm mất màn chúc mừng; Esc vẫn đóng được
          onPointerDownOutside={e => e.preventDefault()}
          className={mobile
            ? "data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[var(--sl-bg)] outline-none"
            : "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-[28px] bg-[var(--sl-surface)] px-8 pt-9 pb-7 shadow-[0_30px_80px_rgba(25,62,65,.35)] duration-200 outline-none"}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            ...(mobile ? { padding: "max(28px, env(safe-area-inset-top)) 20px max(20px, env(safe-area-inset-bottom))" } : {}),
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", width: "100%", maxWidth: 440, margin: "0 auto" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: mobile ? 0 : 400 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={step} {...slide} transition={{ duration: 0.28, ease: "easeOut" }}>
                  {step === "streak"
                    ? <StreakStep streak={steps.streak!} day={steps.day} />
                    : <QuestStep quests={steps.quests} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {list.length > 1 && (
              <div aria-hidden style={{ display: "flex", justifyContent: "center", gap: 6, margin: "18px 0 12px" }}>
                {list.map((s, k) => (
                  <span key={s} style={{ width: k === i ? 18 : 6, height: 6, borderRadius: 20, background: k === i ? C.cta : C.borderStrong, transition: "width .25s" }} />
                ))}
              </div>
            )}
            <button
              onClick={() => (last ? onClose() : setI(i + 1))}
              className="bg-[var(--sl-cta)] transition-colors hover:bg-[var(--sl-cta-hover)] focus-visible:ring-2 focus-visible:ring-[var(--sl-ink)] focus-visible:ring-offset-2 focus-visible:outline-none"
              style={{ width: "100%", marginTop: list.length > 1 ? 0 : 22, color: C.onFill, border: "none", borderRadius: 16, padding: "14px 0", fontSize: 19, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: CTA_SHADOW }}
            >
              Tiếp tục
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
