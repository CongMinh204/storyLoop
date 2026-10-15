import { OAuth2Client } from "google-auth-library";
import { env } from "../env.js";
import { HttpError } from "../http.js";
import { NAME_MAX, NAME_MIN, normalizeEmail } from "../shared/validation.js";

const client = new OAuth2Client();

export type GoogleProfile = { googleId: string; email: string; fullName: string };

// Kiểm tra ID token do Google Identity Services trả cho frontend
export async function verifyGoogleToken(idToken: string): Promise<GoogleProfile> {
  if (!env.GOOGLE_CLIENT_ID) throw new HttpError(503, "Đăng nhập Google chưa được bật");

  let payload;
  try {
    const ticket = await client.verifyIdToken({ idToken, audience: env.GOOGLE_CLIENT_ID });
    payload = ticket.getPayload();
  } catch {
    throw new HttpError(401, "Đăng nhập Google không hợp lệ, hãy thử lại");
  }
  if (!payload?.sub || !payload.email) throw new HttpError(401, "Đăng nhập Google không hợp lệ, hãy thử lại");
  if (!payload.email_verified) throw new HttpError(401, "Email Google này chưa được xác minh");

  const email = normalizeEmail(payload.email);
  const name = (payload.name ?? "").trim().slice(0, NAME_MAX);
  return { googleId: payload.sub, email, fullName: name.length >= NAME_MIN ? name : email.split("@")[0] };
}
