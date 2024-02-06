import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as storeAPI from '../lib/api/store';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'store/INITIALIZE'; // 모든 내용 초기화
const [
    FIND_STORE,
    FIND_STORE_SUCCESS,
    FIND_STORE_FAILURE,
] = createRequestActionTypes('store/FIND_STORE'); //stores/FIND_STORES 오타 확인

export const findStore = createAction(FIND_STORE, ( storeId ) => ({
    storeId
}));

const findStoreSaga = createRequestSaga(FIND_STORE, storeAPI.findStore);

export function* storeSaga(){
    yield takeLatest(FIND_STORE, findStoreSaga);
}

const initialState = {
    store: null,
    error: null,
};

const store = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [FIND_STORE]: state=>({
            ...state,
            store: null,
            error: null,
        }),
        [FIND_STORE_SUCCESS]: (state, { payload: store}) => ({
            ...state,
            store,
        }),
        [FIND_STORE_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default store;