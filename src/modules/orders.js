import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'orders/INITIALIZE'; // 모든 내용 초기화
const [
    FIND_ORDERING,
    FIND_ORDERING_SUCCESS,
    FIND_ORDERING_FAILURE,
] = createRequestActionTypes('orders/FIND_ORDERING'); //store 찾기

export const findOrdering = createAction('orders/FIND_ORDERING', (storeId) => ({
    storeId
}));

const findOrderingSaga = createRequestSaga(FIND_ORDERING, orderAPI.findOrdering);

export function* ordersSaga(){
    yield takeLatest(FIND_ORDERING, findOrderingSaga);
}

const initialState = {
    orders: null,
    ordering: null,
    error: null,
};

const orders = handleActions(
    {
        [FIND_ORDERING]: state=>({
            ...state,
            menuInfo: null,
            error: null,
        }),
        [FIND_ORDERING_SUCCESS]: (state, { payload: ordering}) => ({
            ...state,
            ordering,
        }),
        [FIND_ORDERING_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default orders;