import axios from "axios";

const BASE_API_URL = "http://18.136.203.122/_api";

class Api {
  config = {
    baseURL: "",
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE"
    }
  };

  constructor(BaseApiURL) {
    this.BaseApiURL = BaseApiURL;
    this.config = { ...this.config, baseURL: this.BaseApiURL };

    this.api_application = axios.create({
      ...this.config,
      "Content-Type": "application/json"
    });
    this.api_multipart = axios.create({
      ...this.config,
      "Content-Type": "multipart/form-data"
    });

    this.setToken();
  }

  setToken = () => {
    let jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) jwtToken = "";
    else jwtToken = `Bearer ${jwtToken}`;

    this.api_application.defaults.headers.Authorization = jwtToken;
    this.api_multipart.defaults.headers.Authorization = jwtToken;
  };

  getBaseURL = () => {
    return this.BaseApiURL;
  };
}

const api = new Api(BASE_API_URL);
export default api;
