import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';


const [
    FIND_ORDERING,
    FIND_ORDERING_SUCCESS,
    FIND_ORDERING_FAILURE,
] = createRequestActionTypes('orders/FIND_ORDERING'); //store 찾기

const [
    FIND_DONE,
    FIND_DONE_SUCCESS,
    FIND_DONE_FAILURE,
] = createRequestActionTypes('orders/FIND_DONE'); //store 찾기

export const findOrdering = createAction(FIND_ORDERING, (storeId) => ({
    storeId
}));

export const findDone = createAction(FIND_DONE, (storeId) => ({
    storeId
}));

const findOrderingSaga = createRequestSaga(FIND_ORDERING, orderAPI.findOrdering);
const findDoneSaga = createRequestSaga(FIND_DONE, orderAPI.findDone);

export function* ordersSaga(){
    yield takeLatest(FIND_ORDERING, findOrderingSaga);
    yield takeLatest(FIND_DONE, findDoneSaga);
}

const initialState = {
    orders: null,
    ordering: null,
    done: null,
    error: null,
};

const orders = handleActions(
    {
        [FIND_ORDERING]: state=>({
            ...state,
            ordering: null,
            error: null,
        }),
        [FIND_ORDERING_SUCCESS]: (state, { payload: ordering}) => ({
            ...state,
            ordering,
        }),
        [FIND_ORDERING_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        }),
        [FIND_DONE]: state=>({
            ...state,
            done: null,
            error: null,
        }),
        [FIND_DONE_SUCCESS]: (state, { payload: done}) => ({
            ...state,
            done,
        }),
        [FIND_DONE_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default orders;