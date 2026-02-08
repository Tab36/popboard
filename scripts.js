const API = "https://popboard.seojin8550.workers.dev";
async function login() {
  const res = await fetch(API + "/auth/issue");
  const _token = await res.text();
  localStorage.setItem("token", _token);
}
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
