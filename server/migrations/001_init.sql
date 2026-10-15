-- Khung dữ liệu ban đầu: tài khoản, tiến độ truyện, hoạt động theo ngày, phiên đăng nhập.

CREATE TABLE users (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email         text NOT NULL UNIQUE CHECK (email = lower(email)),
  full_name     text NOT NULL,
  password_hash text,
  google_id     text UNIQUE,
  role          text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at    timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz
);

CREATE TABLE story_progress (
  user_id        uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id       text NOT NULL,
  status         text NOT NULL CHECK (status IN ('started', 'completed')),
  pct            integer NOT NULL DEFAULT 0 CHECK (pct BETWEEN 0 AND 100),
  endings        text[] NOT NULL DEFAULT '{}',
  best_right     integer,
  best_total     integer,
  last_played_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, story_id)
);

CREATE TABLE activity_days (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day     date NOT NULL,
  xp      integer NOT NULL DEFAULT 0 CHECK (xp >= 0),
  PRIMARY KEY (user_id, day)
);

CREATE TABLE sessions (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id            uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  refresh_token_hash text NOT NULL,
  expires_at         timestamptz NOT NULL
);

CREATE INDEX sessions_user_id_idx ON sessions(user_id);
CREATE INDEX sessions_refresh_token_hash_idx ON sessions(refresh_token_hash);
