import request from "./requests.js";

const http = {
  get(url, params) {
    const config = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url, params, data) {
    const config = {
      method: "post",
      url: url,
    };
    if (params) config.params = params;
    if (data) config.data = data;
    return request(config);
  },
  put(url, params, data) {
    const config = {
      method: "put",
      url: url,
    };
    if (params) config.params = params;
    if (data) config.data = data;
    return request(config);
  },
  delete(url, params) {
    const config = {
      method: "delete",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
};

export default http;
