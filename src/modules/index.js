import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import stores, { storesSaga } from './stores';

const rootReducer = combineReducers({
  auth,
  user,
  stores
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), storesSaga()]);
}

export default rootReducer;