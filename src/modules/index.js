import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import stores, { storesSaga } from './stores';
import menu, {menuSaga} from './menu';
import store, {storeSaga} from './store';
import orders, {ordersSaga} from './orders';
import process, {processSaga} from './process';
import item, {itemSaga} from './item';
import order, {orderSaga} from './order';
import myOrders, {myOrderSaga} from './myOrder';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  stores,
  menu,
  store,
  orders,
  process,
  item,
  order,
  myOrders,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), storesSaga(), menuSaga(), storeSaga(), ordersSaga(),
            processSaga(), itemSaga(), orderSaga(), myOrderSaga()]);
}

export default rootReducer;