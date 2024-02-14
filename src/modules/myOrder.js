import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [
    FIND_ORDERS,
    FIND_ORDERS_SUCCESS,
    FIND_ORDERS_FAILURE,
] = createRequestActionTypes('myOrder/FIND_ORDERS'); //store 찾기

export const findOrders = createAction(FIND_ORDERS, (userId) => ({
    userId
}));

const findOrdersSaga = createRequestSaga(FIND_ORDERS, orderAPI.findOrders);

export function* myOrderSaga(){
    yield takeLatest(FIND_ORDERS, findOrdersSaga);
}

const initialState = {
    orders: null,
    error: null,
};

const myOrders = handleActions(
    {
        [FIND_ORDERS]: state=>({
            ...state,
            orders: null,
            error: null,
        }),
        [FIND_ORDERS_SUCCESS]: (state, { payload: orders}) => ({
            ...state,
            orders,
        }),
        [FIND_ORDERS_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default myOrders;