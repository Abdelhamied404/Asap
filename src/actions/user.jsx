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
    cookie.set(
      "auth",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM0NTdlMWNiMGMwYmRmNzA4NWVmYmJjNWRjNjU5ODU2ODlkNmRkYjQwYjhhODE3Njk4M2I3M2U4ODY5NDNlNWI3NTM5ZDYyMGE4YThiYTkzIn0.eyJhdWQiOiI2IiwianRpIjoiMzQ1N2UxY2IwYzBiZGY3MDg1ZWZiYmM1ZGM2NTk4NTY4OWQ2ZGRiNDBiOGE4MTc2OTgzYjczZTg4Njk0M2U1Yjc1MzlkNjIwYThhOGJhOTMiLCJpYXQiOjE1NTQ3NDkzNzksIm5iZiI6MTU1NDc0OTM3OSwiZXhwIjoxNTg2MzcxNzc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Lg5q-v9IcxvnQPS07zShALIEnZ8TAUlB7b96It0wo-mtkrnNfeLIRiugaI1Il6FswrpFPltMkAv83x6F1KyEI8wfIia_wRj8iHnof76fIelfbR3twVRwjPPWZ8bsFHCd1Nt8i0AgGQjWBhxn586yn0tQp9bP6k-O192dmoZUiHetaVnWN9faI-XaYzfao4pobDaFO9QMOS-LSWXPzZ0s6mNSogbyUiGAJpCr-t7_zk69gUmZErNTGWlvDaZ7nHhGBzJ1f6j6GhFnP_EwVVUOF4DHKPtwo---7QVN30ROYlqlG6PikmKC_qj1s-0xYm3BxngEtU2tSct6zhTYCD5ZBAX3A91pZBVkd7Ql13Ic_DbHvUedWw6JlHwrw2lwv51lucZDSOMYBKeShQDE4zrgYy1rNq6n0ZWor_jVYrDVPlKICAlvOXcxNKawUH3GlcapW6ICCo22w1CUjf3Q995eTBZgCaybaLYuA51KltHQWc_FT8LGISm7avMA5JdLXmbwmsTE6A1lml-4VZT8e-OWCqfci8CSN-aUwLsp6VTaEAFMBmOYzWQXOoYav8-uCYnkdT5Shgf3Yz_5x7XSs9FvQg_CKFB-nXDslMtAJFcQyDtPIFQFN0Jcbqxj1xSN6pWNBi0a7rP2xyzmbMfm_5c0UIdDMfKVrWThJzszcvaMW2E",
      100,
      "/"
    );
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
