import { USER, FORM } from "./types";

import API from "../api";
import * as cookie from "./utils/cookie";
import history from "./history";

const Auth = payload => {
  return {
    payload: payload,
    type: USER.AUTH
  };
};
const AuthErr = () => {
  return {
    type: USER.AUTHERR
  };
};

const ValidErr = payload => {
  return {
    type: FORM.VALIDATE,
    payload: payload
  };
};

/**
 * exports
 */
// auth
export const auth = (_callback) => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    API.get("user", conf)
      .then(res => {
        let payload = res.data;
        dispatch(Auth(payload));
        if (_callback)
          _callback();
      })
      .catch(err => {
        dispatch(AuthErr());
        console.log(err);
      });
  };
};

export const logout = () => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };
    cookie.set("auth", "any", 0, "/");

    API.get("user/logout", conf)
      .then(res => {
        // refreshing
        history.push("/logout");
        setTimeout(() => {
          history.replace("/");
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

// signup
export const signup = user => {
  let errors = validate(user);
  if (Object.keys(errors).length === 0) {
    return dispatch => {
      API.post("user", user)
        .then(res => {
          const payload = res.data;

          const token = payload.user.token_type + " " + payload.user.token;
          cookie.set("auth", token, 7, "/");

          dispatch(Auth(payload));
          // redirect back to home
          history.push("/");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };
  } else {
    return dispatch => {
      dispatch(ValidErr(errors));
    };
  }
};

//login
export const login = creds => {
  return dispatch => {
    let errors = {};
    // validating
    if (!creds || !creds.email) errors["email"] = "required";
    if (creds && creds.email && !email(creds.email)) errors["email"] = "email not valid";

    if (Object.keys(errors).length === 0) {
      // no errors
      const conf = {
        params: creds
      };
      API.get("user/login", conf)
        .then(res => {
          const payload = res.data;
          const token = payload.user.token_type + " " + payload.user.token;
          cookie.set("auth", token, 7, "/");
          dispatch(Auth(payload));
          // redirect back to home
          history.push("/");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    } else {
      dispatch(ValidErr(errors));
    }
  };
};

export const changePic = pic => {
  return dispatch => {
    console.log("pic", pic);
    const token = cookie.get("auth");

    let fd = new FormData();
    fd.append("avatar", pic);

    const conf = {
      headers: {
        'Content-Type': pic.type,
        Authorization: token
      }
    };

    API.post("user/update", fd, conf)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }
}



/**
 *
 * @param {utils} user
 */
const validate = user => {
  let errors = {};

  //requried
  if (!user || !user.name) errors["name"] = "required";
  if (!user || !user.email) errors["email"] = "required";
  if (!user || !user.password) errors["password"] = "required";
  if (!user || !user.gender) errors["gender"] = "required";

  // length
  if (user) {
    if (user.name && user.name.length < 3)
      errors["name"] = "3 characters minimum";
    if (user.password && user.password.length < 6)
      errors["password"] = "6 characters minimum";

    // email
    if (user.email && !email(user.email)) errors["email"] = "not a valid email";
  }

  return errors;
};

const email = email => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
