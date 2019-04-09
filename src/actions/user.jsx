import { USER } from "./types";

import API from "../api";
import * as cookie from "./utils/cookie";

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
    const token = "Bearer " + cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    API.get("user", conf)
      .then(res => {
        let payload = res.data;
        console.log(payload);
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
    const token = "Bearer " + cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    cookie.set("auth", "any", 0, "/");
    console.log("logged out");

    API.get("user/logout", conf)
      .then(res => {
        let payload = res.data;
        console.log(payload);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
