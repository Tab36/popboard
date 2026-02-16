const API = "https://popboard.seojin8550.workers.dev";

async function api(path, options = {}) {
  const token = localStorage.getItem("token");

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
  const message = document.getElementById("message");

  try {
    const res = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (res.ok) {
      const token = await res.text();
      localStorage.setItem("token", token);
      message.textContent = "Login successful.";
    } else {
      message.textContent = "Login failed.";
    }
  } catch (err) {
    message.textContent = "Server error.";
  }
});
