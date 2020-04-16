import {
  SET_CURRENT_USER,
  //USER_LOADING,
  //AUTH_LINK_GOOGLE,
  //AUTH_UNLINK_GOOGLE,
  ADD_FAV,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  //loading: false,
  favourites: [],
};

//GOOGLE
/*
  secret: "",
  methods: [],
  //
  */

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    /*
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
*/
    //GOOGLE
    /*
    case AUTH_LINK_GOOGLE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    case AUTH_UNLINK_GOOGLE:
      return {
        ...state,
        isAuthenticated: isEmpty(action.payload),
        user: action.payload,
      };
*/
    case ADD_FAV:
      return {
        ...state,
        userLoaded: { favourites: action.favourites },
      };

    default:
      return state;
  }
}
