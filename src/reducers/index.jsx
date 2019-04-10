import { combineReducers } from "redux";
import user from "./user";
import auth_user from "./auth_user";
import doctor from "./doctor";
import section from "./section";

const root = combineReducers({
  user: user,
  doctor: doctor,
  section: section,
  auth_user: auth_user
});

export default root;
