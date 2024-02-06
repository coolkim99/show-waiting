import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import stores, { storesSaga } from './stores';
import menu, {menuSaga} from './menu';
import store, {storeSaga} from './store';
import orders, {ordersSaga} from './orders';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  stores,
  menu,
  store,
  orders
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), storesSaga(), menuSaga(), storeSaga(), ordersSaga()]);
}

export default rootReducer;