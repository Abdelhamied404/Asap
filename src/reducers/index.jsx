import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";
import section from "./section";
import post from "./post";
import comment from "./comment";
import chat from "./chat";
import appointment from "./appointment";
import profile from "./profile";
import search from "./search";
import auth_user from "./auth_user";
import { reducer as reduxFormReducer } from "redux-form";

const root = combineReducers({
  form: reduxFormReducer,
  user: user,
  auth_user: auth_user,
  doctor: doctor,
  section: section,
  post: post,
  comment: comment,
  chat: chat,
  appointment: appointment,
  profile: profile,
  search: search,
});

export default root;
