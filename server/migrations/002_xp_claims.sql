-- Các mốc đã được cộng XP, để mỗi bước của mỗi truyện chỉ cộng XP một lần.
-- Nội dung truyện nằm ở frontend nên server không kiểm chứng được câu trả lời; bảng này chặn việc
-- gọi API lặp lại để tăng XP. claim_key: "step:<khoá bước>" hoặc "complete" (thưởng hoàn thành).
CREATE TABLE xp_claims (
  user_id    uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id   text NOT NULL,
  claim_key  text NOT NULL,
  claimed_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, story_id, claim_key)
);
