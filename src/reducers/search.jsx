import { SEARCH } from "../actions/types";

const INITIAL_STATE = {
    loaded: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH.LOAD:
            return {
                ...state,
                ...action.payload,
                loaded: 1
            };

        case SEARCH.LOADERR:
            return {
                ...state,
                loaded: -1
            };
        default:
            return state;
    }
};
