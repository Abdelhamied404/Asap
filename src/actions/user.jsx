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
export const auth = () => {
  return dispatch => {
    /**
     * testing
     */
    // cookie.set(
    //   "auth",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEwOWU2YzZiZDNjYzZkZmM5M2RlMmU2MTExMzJiYjZmMmM5YzM4OTc1NzNlMTYzMDM2NzlkMTZlZjYwMWRlZTIzNzRkNzI0NDhhZjIxZmQxIn0.eyJhdWQiOiI2IiwianRpIjoiMTA5ZTZjNmJkM2NjNmRmYzkzZGUyZTYxMTEzMmJiNmYyYzljMzg5NzU3M2UxNjMwMzY3OWQxNmVmNjAxZGVlMjM3NGQ3MjQ0OGFmMjFmZDEiLCJpYXQiOjE1NTQ3OTg2MTQsIm5iZiI6MTU1NDc5ODYxNCwiZXhwIjoxNTg2NDIxMDE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fAqQOsc_4miZPlXu3fHhy_Oix9ea9ZBc0QTDutLnwvenrrQZCuPkw0vqsN8jLJI_M8Hgr-HF6INrkOEM9DtE_4BicVET2MC4Dpt4JE8V7UMkR2ag2QU9bE9HPOOcMXOH1g4Fp8hHM7-YPW9mlYG5udCIeMO43k1s9YbB6P2vGkAFFkLkJJpIEuHGIySMvaimBo2_FMu9fA-s5lDtCc1G8tCV6ike8s0URnNDeIFBUIvoACUbBJZBJFPUfBG4t-L-98YYuEFQ4_tykLazs2gj9uaQTqpO3JEYGoRUIyU7-m3VS1D8CvGSbK4Qc1Dfdu50aVABvbBRLssX3skj_2kAnmPp1GzgKt-YGZxpEjr83oJqTFDkxOFVZrK42aolEgr5CfpAEmckAW_rdWxDhUA0313eneUo_exYZKto_L8DCD9daAc6SCA1rDO-bcRTqvkVbAeij3Pp0CaDd2mCheOuF-71K43Ihs5XtSGzxc5a-TRmhHDERna5u_6VHTxGJcNVOTdEBoZxHonoLu8IMjbsGEdY7_O2zxeR7cqQmH4gOeUmJpWwq15hT-Dcs2uEkSbrMi-WdyxcoYZH-OswX4EzurIWMmbz8evhOznPRIXgWRmElV17B2Yk-Pm4mPpXK-IOaYoD-QGldiOr0yXOR2Li9jqd2C4-vcaOLE1MIkoLZa4",
    //   100,
    //   "/"
    // );
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
    if (!creds.email) errors["email"] = "required";
    if (creds.email && !email(creds.email)) errors["email"] = "email not valid";

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

/**
 *
 * @param {utils} user
 */
const validate = user => {
  let errors = {};

  //requried
  if (!user.name) errors["name"] = "required";
  if (!user.email) errors["email"] = "required";
  if (!user.password) errors["password"] = "required";
  if (!user.gender) errors["gender"] = "required";

  // length
  if (user.name && user.name.length < 3)
    errors["name"] = "3 characters minimum";
  if (user.password && user.password.length < 6)
    errors["password"] = "6 characters minimum";

  // email
  if (user.email && !email(user.email)) errors["email"] = "not a valid email";

  return errors;
};

const email = email => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
