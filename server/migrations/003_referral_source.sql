-- Người dùng biết tới StoryLoop qua đâu (hỏi ở form đăng ký bằng email).
-- Giá trị: 'friend', 'facebook' hoặc 'other:<nội dung tự ghi>'. Tài khoản cũ và tài khoản Google để NULL.
ALTER TABLE users
  ADD COLUMN referral_source text
  CHECK (
    referral_source IS NULL
    OR referral_source IN ('friend', 'facebook')
    OR (referral_source LIKE 'other:%' AND char_length(referral_source) <= 100)
  );
