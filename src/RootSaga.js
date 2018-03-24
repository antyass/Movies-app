import { all, call } from "redux-saga/effects";
import auth from "./ducks/auth-duck/Saga";
import movies from "./ducks/movies-duck/Saga";

export default function* rootSaga() {
  yield all([call(auth), call(movies)]);
}
