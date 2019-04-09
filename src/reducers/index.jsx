import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";
import section from "./section";

const root = combineReducers({
  user: user,
  doctor: doctor,
  section: section
});

export default root;
