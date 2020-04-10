import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;
