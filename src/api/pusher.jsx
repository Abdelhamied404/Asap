import Pusher from "pusher-js";

const key = "c02803c5006db13ff4cb";
Pusher.logToConsole = true;

export const pusher = new Pusher(key, {
  cluster: "mt1",
  forceTLS: true
});
