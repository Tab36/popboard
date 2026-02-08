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
