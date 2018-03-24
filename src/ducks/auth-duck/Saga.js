import { put, takeLatest, call, all } from "redux-saga/effects";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* fetchRequestTokenSaga() {
  try {
    const response = yield call(xhr.requestApi, "/authentication/token/new");
    if (response) {
      yield put(actions.fetchTokenSuccess(response.request_token));
    } else {
      yield put(actions.fetchTokenError("No token response"));
    }
  } catch (error) {
    yield put(actions.fetchTokenError(error.message));
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(
      xhr.requestApi,
      "authentication/token/validate_with_login",
      {
        username: action.username,
        password: action.password,
        request_token: action.requestToken
      }
    );

    if (response.success) {
      yield put(actions.loginSuccess());
    } else {
      yield put(actions.handleLoginError(response.status_message));
    }
  } catch (error) {
    yield put(actions.handleLoginError(error.message));
  }
}

export default function* authRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_TOKEN_REQUEST, fetchRequestTokenSaga),
    yield takeLatest(types.LOGIN_REQUEST, loginSaga)
  ]);
}
