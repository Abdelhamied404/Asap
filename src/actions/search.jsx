import { SEARCH } from "./types";
import API from "../api";

const Load = payload => {
    return {
        payload: payload,
        type: SEARCH.LOAD
    };
};

const LoadErr = () => {
    return {
        type: SEARCH.LOADERR
    };
};

export const Get = (q) => {
    return dispatch => {
        API.get("user/find/" + q)
            .then(res => {
                const payload = res.data;
                dispatch(Load(payload));
            })
            .catch(err => {
                console.log(err);
                dispatch(LoadErr());
            });
    };
};
