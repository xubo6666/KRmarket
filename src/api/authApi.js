import http from "../libs/http.js";

// let request = "/user/";
let request = "/";

export function signUp(data) {
  return http.post(`${request}signup/`, undefined, data);
}

export function login(data) {
  return http.post(`${request}login/`, undefined, data);
}

export function refreshToken(data) {
  return http.get(`${request}refresh_token/`, data);
}
