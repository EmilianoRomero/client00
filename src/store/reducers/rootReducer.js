import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

const rootReducer = combineReducers({ cities: citiesReducer, typedCity: citiesReducer });

export default rootReducer;
