import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  auth: authReducer,
  errors: errorReducer,
  comments: commentReducer,
});

export default rootReducer;
