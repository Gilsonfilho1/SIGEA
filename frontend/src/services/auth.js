const USER_KEY = "sigea:user";
const TOKEN_KEY = "sigea:token";

export const AUTH_CHANGE_EVENT = "sigea:auth-change";

function notifyAuthChange() {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

function decodeTokenPayload(token) {
  try {
    const payload = token.split(".")[1];
    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
    const paddedPayload = normalizedPayload.padEnd(
      normalizedPayload.length + ((4 - (normalizedPayload.length % 4)) % 4),
      "=",
    );
    return JSON.parse(window.atob(paddedPayload));
  } catch {
    return null;
  }
}

export function setAuthSession({ user, access_token }) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, access_token);
  notifyAuthChange();
}

export function setAccessToken(accessToken) {
  localStorage.setItem(TOKEN_KEY, accessToken);
  notifyAuthChange();
}

export function clearAuthSession() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
  notifyAuthChange();
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getTokenExpiration() {
  const token = getAccessToken();
  const payload = token ? decodeTokenPayload(token) : null;

  return payload?.exp ? payload.exp * 1000 : null;
}

export function isAuthenticated() {
  const token = getAccessToken();

  if (!token) {
    return false;
  }

  const expiresAt = getTokenExpiration();

  if (!expiresAt || Date.now() >= expiresAt) {
    clearAuthSession();
    return false;
  }

  return true;
}
