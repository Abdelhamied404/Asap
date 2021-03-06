import Pusher from "pusher-js";

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const key = IS_DEV ? process.env.REACT_APP_DEV_PUSHER_KEY : process.env.REACT_APP_PROD_PUSHER_KEY;

Pusher.logToConsole = IS_DEV ? true : false;

export const pusher = new Pusher(key, {
  cluster: "mt1",
  forceTLS: true
});
