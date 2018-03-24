import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./ducks/auth-duck/Reducer";
import movies from "./ducks/movies-duck/Reducer";

const rootReducer = combineReducers({
  auth,
  movies,
  router: routerReducer
});

export default rootReducer;