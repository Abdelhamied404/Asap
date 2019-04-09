import axios from "axios";

const defaults = {
  baseURL: "http://healthqo.api/api/",
  // baseURL: "https://safe-basin-29570.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Key": "lZPAsTDxJsuvmibm1nnTlh1cwt8ybZ28"
  }
};

// exports
export default axios.create({ ...defaults });
