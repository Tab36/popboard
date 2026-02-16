const API = "https://popboard.seojin8550.workers.dev";
async function gettoken() {
  const res = await fetch(API + "/auth/issue");
    const _token = await res.text();
  localStorage.setItem("token", _token);
}
gettoken()
const token = localStorage.getItem("token")

async function api(path, options = {}) {
  const res = await fetch(API + path, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: "Bearer " + token } : {})
    }
  });

  return res;
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  async function login(username, password) {
  const res = await fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  return res;
}

  const message = document.getElementById("message");

  if (res.ok) {
    const token = await res.text();
    localStorage.setItem("token", token);
    message.textContent = "Login successful.";
  } else {
    message.textContent = "Login failed.";
  }
});
