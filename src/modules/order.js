import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import produce from 'immer';

const UPDATE_COUNT = 'order/UPDATE_COUNT';

const [
    ORDER,
    ORDER_SUCCESS,
    ORDER_FAILURE,
] = createRequestActionTypes('order/ORDER'); //store 찾기



export const doOrder = createAction(ORDER, (storeId, itemId, userId, count) => ({
    storeId, itemId, userId, count
}));
export const updateCount = createAction(UPDATE_COUNT, count => count);

const doOrderSaga = createRequestSaga(ORDER, orderAPI.order);

export function* orderSaga(){
    yield takeLatest(ORDER, doOrderSaga);
}

const initialState = {
    count: 0,
    order: null,
    error: null,
};

const order = handleActions(
    {
        [UPDATE_COUNT]: (state, { payload: count }) => ({
            ...state,
            count,
          }),
          [ORDER]: state=>({
            ...state,
            order: null,
            error: null,
        }),
        [ORDER_SUCCESS]: (state, { payload: order}) => ({
            ...state,
            order,
        }),
        [ORDER_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default order;