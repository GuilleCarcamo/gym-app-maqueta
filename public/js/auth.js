const AUTH_KEY = "user";

export function login(username, password) {
  if (username === "admin" && password === "1234") {
    localStorage.setItem(AUTH_KEY, JSON.stringify({
      username: "admin",
      role: "admin",
      nombre: "Administrador"
    }));
    return true;
  }
  if (username === "cliente" && password === "1234") {
    localStorage.setItem(AUTH_KEY, JSON.stringify({
      username: "cliente",
      role: "cliente",
      nombre: "Juan Pérez"
    }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
  return true;
}

export function getUser() {
  try {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null; // ✅ Manejo seguro de null
  } catch (error) {
    console.warn("Error al leer sesión:", error);
    localStorage.removeItem(AUTH_KEY);
    return null;
  }
}