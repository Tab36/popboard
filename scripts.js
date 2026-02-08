const API = "https://popboard.seojin8550.workers.dev";
const token = await fetch(API + "/auth/issue").text();

async function api(path, opｔions = {}) {
  const res = await fetch(API + path, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: "Bearer " + token } : {})
    }
  });

  return res;
}
