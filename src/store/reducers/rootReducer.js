import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  auth: authReducer,
  errors: errorReducer,
});

export default rootReducer;
