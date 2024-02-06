import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import stores, { storesSaga } from './stores';
import menu, {menuSaga} from './menu';
import store, {storeSaga} from './store';

const rootReducer = combineReducers({
  auth,
  user,
  stores,
  menu,
  store
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), storesSaga(), menuSaga(), storeSaga()]);
}

export default rootReducer;