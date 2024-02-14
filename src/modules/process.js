import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [
    DONE,
    DONE_SUCCESS,
    DONE_FAILURE,
] = createRequestActionTypes('process/DONE');

const [
    NOT_DONE,
    NOT_DONE_SUCCESS,
    NOT_DONE_FAILURE,
] = createRequestActionTypes('process/NOT_DONE');

export const orderDone = createAction('process/DONE', (id) => ({
    id
}));

export const notDone = createAction('process/NOT_DONE', (id) => ({
    id
}));

const doneSaga = createRequestSaga(DONE, orderAPI.orderDone);
const notDoneSaga = createRequestSaga(NOT_DONE, orderAPI.orderNotDone);

export function* processSaga(){
    yield takeLatest(DONE, doneSaga);
    yield takeLatest(NOT_DONE, notDoneSaga);
}

const initialState = {
    done: null,
    notDone: null,
    error: null,
};

const process = handleActions(
    {
        [DONE]: state=>({
            ...state,
            done: null,
            error: null,
        }),
        [DONE_SUCCESS]: (state, { payload: done}) => ({
            ...state,
            done,
        }),
        [DONE_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        }),
        [NOT_DONE]: state=>({
            ...state,
            notDone: null,
            error: null,
        }),
        [NOT_DONE_SUCCESS]: (state, { payload: notDone}) => ({
            ...state,
            notDone,
        }),
        [NOT_DONE_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default process;