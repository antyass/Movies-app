import { put, takeLatest, call, all } from "redux-saga/effects";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* fetchRequestMoviesSaga() {
  try {
    const response = yield call(xhr.requestApi, "discover/movie");
    if (response) {
      yield put(actions.fetchMoviesSuccess(response.results));
    } else {
      yield put(actions.fetchMoviesError("No movies response"));
    }
  } catch (error) {
    yield put(actions.fetchMoviesError(error.message));
  }
}

function* fetchRequestMovieSaga(action) {
  try {
    const response = yield call(xhr.requestApi, `movie/${action.id}`);

    if (response) {
      yield put(actions.fetchMovieSuccess(response));
    } else {
      yield put(actions.fetchMovieError("No movie response"));
    }
  } catch (error) {
    yield put(actions.fetchMovieError(error.message));
  }
}

function* fetchRequestGenresSaga() {
  try {
    const response = yield call(xhr.requestApi, "genre/movie/list");

    if (response) {
      yield put(actions.fetchGenresSuccess(response.genres));
    } else {
      yield put(actions.fetchGenresError("No genres response"));
    }
  } catch (error) {
    yield put(actions.fetchGenresError(error.message));
  }
}

export default function* moviesRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_GENRES_REQUEST, fetchRequestGenresSaga),
    yield takeLatest(types.FETCH_MOVIES_REQUEST, fetchRequestMoviesSaga),
    yield takeLatest(types.FETCH_MOVIE_REQUEST, fetchRequestMovieSaga)
  ]);
}
