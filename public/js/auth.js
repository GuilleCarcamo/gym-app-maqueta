export function login(user, pass) {
  if (user === "admin" && pass === "1234") {
    localStorage.setItem("user", JSON.stringify({
      username: user,
      role: "admin"
    }));
    return true;
  }

  if (user === "cliente" && pass === "1234") {
    localStorage.setItem("user", JSON.stringify({
      username: user,
      role: "cliente"
    }));
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}