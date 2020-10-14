const BASE_URL = "/api/trips";

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(trp) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(trp),
  }).then(res => res.json());
}

export function update(trp) {
  return fetch(`${BASE_URL}/${trp._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(trp),
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(res => res.json());
}