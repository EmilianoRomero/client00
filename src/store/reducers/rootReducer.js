import { combineReducers } from "redux";
import fetchingReducer from "./fetchingReducer";
import searchCityReducer from "./searchCityReducer";

const rootReducer = combineReducers({
  cities: fetchingReducer,
  value: searchCityReducer
});

export default rootReducer;
