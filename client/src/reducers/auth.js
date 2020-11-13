import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

// Setting up the first initial state to default
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

// exporting the Initial State
export default function (state = initialState, action) {
  const { type, payload } = action; // destructuring

  // test case of register success and set token to localStorage
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state, // spread operator
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    //test if register fail
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
