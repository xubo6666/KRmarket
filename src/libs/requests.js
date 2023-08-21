import axios from "axios";
import { getCookie } from "./cookies";
import router from "@/router";

const request = axios.create({
  withCredentials: true,
  baseURL: "/api",
  timeout: 10000,
});

request.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("access-token")}`,
      Accept: "application/json",
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // error handling
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.msg = "Bad request";
          break;
        case 401:
          localStorage.removeItem("user");
          router.push("/register");
          error.msg = "Unauthorized";
          break;
        case 403:
          error.msg = "Forbidden";
          break;
        case 404:
          error.msg = "Not found";
          break;
        case 405:
          error.msg = "Method not allowed";
          break;
        case 500:
          error.msg = "Internal error";
          break;
        case 504:
          error.message = "netWorkError";
          console.error(504);
          break;
        default:
          error.message = "netWorkError";
          console.error(1);
      }
    } else {
      // time out
      if (JSON.stringify(error).includes("timeout")) {
        console.error("service time out, please refresh your page");
        error.message = "netWorkError";
      }
      // error.message = `netWorkError`;
    }

    console.error(error);

    return Promise.resolve(error.response);
  }
);

export default request;
