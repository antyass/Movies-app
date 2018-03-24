import axios from "axios";
import gcf from "./config";

let instance = null;

export default class XHRProvider {
  constructor() {
    if (instance !== null) {
      return instance;
    }
  }

  requestApi(path, params) {
    return axios
      .get(`${gcf.url}${path}`, {
        params: {
          api_key: gcf.api_key,
          ...params
        }
      })
      .then(response => response.data);
  }
}
