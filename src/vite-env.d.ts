/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;           // địa chỉ backend, vd. https://storyloop-production.up.railway.app
  readonly VITE_GOOGLE_CLIENT_ID?: string;  // OAuth Client ID của Google; trống thì ẩn nút Google
}
