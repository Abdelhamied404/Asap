import { APPOINTMENT } from "./types";

import API from "../api";
import * as cookie from "./utils/cookie";
import history from "./history";

const Load = payload => {
    return {
        payload: payload,
        type: APPOINTMENT.GET
    };
};
const Reserve = payload => {
    return {
        payload: payload,
        type: APPOINTMENT.RESERVE
    };
};
const LoadErr = () => {
    return {
        type: APPOINTMENT.LOADERR
    };
};

export const getAppointments = doctor_id => {
    return dispatch => {
        const token = cookie.get("auth");

        let conf = {
            headers: {
                Authorization: token
            },
            params: {
                doctor_id: doctor_id
            }
        };
        API.get("appointment", conf)
            .then(res => {
                let payload = res.data;
                dispatch(Load(payload));
            })
            .catch(err => {
                dispatch(LoadErr());
            });
    };
};

export const reserve = (id) => {
    return dispatch => {
        const token = cookie.get("auth");
        const conf = {
            headers: {
                Authorization: token
            }
        };

        API.post("appointment/reserve/" + id, null, conf)
            .then(res => {
                dispatch(Reserve(res.data));
                alert(res.data.message);
                if (res.data.status !== "error") {
                    let data = {
                        "recipients": [id]
                    };
                    API.post("chat", data, conf)
                        .then(() => {
                            history.push("/code/" + id);
                        }).catch((err) => {
                            console.log(err);
                        });
                }
            }).catch(err => {
                console.log(err);
            })

    }
}
export const chat = (id) => {
    return dispatch => {
        const token = cookie.get("auth");
        const conf = {
            headers: {
                Authorization: token
            }
        };

        let data = {
            "recipients": [id]
        };
        API.post("chat", data, conf)
            .then(() => {
                history.push("/community");
            }).catch((err) => {
                console.log(err);
            });

    }
}

