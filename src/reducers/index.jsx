import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";

const root = combineReducers({
  user: user,
  doctor: doctor
});

export default root;
