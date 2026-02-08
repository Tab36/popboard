const API = "https://popboard.seojin8550.workers.dev";
const res = await fetch(API + "/auth/issue");
localstorage.setitem("token", await res.text())
const token = locastorage.getitem("token")

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
