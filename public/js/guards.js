import { getUser } from './auth.js';

export function requireAuth() {
  const user = getUser();

  if (!user) {
    window.location.href = "../login.html";
  }
}

export function requireRole(role) {
  const user = getUser();

  if (!user || user.role !== role) {
    window.location.href = "../login.html";
  }
}