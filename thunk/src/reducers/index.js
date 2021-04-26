import { FETCHING_FAIL, FETCHING_START, FETCHING_SUCCESS } from "../actions";


const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false,
      }
    case FETCHING_FAIL:
      return {
        ...state,
        error: `${action.payload}, pls try again`,
        isFetching: false,
      }

    default:
      return state;
  }
};