export const selectError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.requestToken;
export const selectAuthStatus = (state) => state.auth.isAuth;