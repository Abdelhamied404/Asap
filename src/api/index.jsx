import axios from "axios";

const defaults = {
  baseURL: "http://asap.api/api/",
  // baseURL: "https://asap-api.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Key": "lZPAsTDxJsuvmibm1nnTlh1cwt8ybZ28"
  }
};

// exports
export default axios.create({ ...defaults });
