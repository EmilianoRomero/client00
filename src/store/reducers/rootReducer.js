import { combineReducers } from "redux";
import fetchingReducer from "./fetchingReducer";
import cityReducer from "./cityReducer";

const rootReducer = combineReducers({
  cities: cityReducer,

});

export default rootReducer;
