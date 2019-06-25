import axios from "axios";

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const defaults = {
  baseURL: IS_DEV ? process.env.REACT_APP_LOCAL_API_URL : process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Key": process.env.REACT_APP_API_KEY
  }
};

// exports
export default axios.create({ ...defaults });
