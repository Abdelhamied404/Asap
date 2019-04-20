import Pusher from "pusher-js";
import Echo from "laravel-echo";

const key = "c02803c5006db13ff4cb";
Pusher.logToConsole = true;

export const pusher = new Pusher(key, {
  cluster: "mt1",
  forceTLS: true
});

export const echo = new Echo({
  brodcaster: "pusher",
  key: key,
  cluster: "mt1",
  encrypted: true
});
