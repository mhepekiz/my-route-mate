import tokenService from './tokenService';
const BASE_URL = "/api/joins";


export function join(join) {
    return fetch(BASE_URL, {
      method: "POST",
      headers: { "content-type": "application/json",
      Authorization: 'Bearer ' + tokenService.getToken()
    },
      body: JSON.stringify(join),
    }).then(res => res.json());
  }
  