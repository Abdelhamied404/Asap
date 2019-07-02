import { APPOINTMENT } from "../actions/types";

const INITIAL_STATE = {
    appointments: {},
    reservation: {},
    loaded: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APPOINTMENT.GET:
            return {
                ...state,
                ...action.payload,
                loaded: 1
            };
        case APPOINTMENT.RESERVE:
            return {
                ...state,
                reservation: {
                    ...action.payload
                },
                loaded: 1
            };

        case APPOINTMENT.LOADERR:
            return {
                ...state,
                ...action.payload,
                loaded: -1
            };
        default:
            return state;
    }
};
