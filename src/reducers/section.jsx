import { SECTION } from "../actions/types";

const INITIAL_STATE = {
  sections: [],
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SECTION.GETSECTIONS:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case SECTION.LOADDOCTORS:
      let sections = state.sections;
      let sec = {
        id: action.section_id,
        doctors: action.payload.doctors.data
      };
      sections = sections.concat(sec);
      console.log(sections);
      return {
        ...state,
        sections: sections,
        loaded: 1
      };

    case SECTION.LOADERR:
      return {
        ...state,
        ...action.payload,
        loaded: -1
      };
    default:
      return state;
  }
};
