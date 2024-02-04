import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as storeAPI from '../lib/api/store';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'stores/INITIALIZE'; // 모든 내용 초기화
const [
    FIND_STORES,
    FIND_STORES_SUCCESS,
    FIND_STORES_FAILURE,
] = createRequestActionTypes('stores/FIND_STORES'); //stores/FIND_STORES 오타 확인

export const findStores = createAction(FIND_STORES);

const findStoresSaga = createRequestSaga(FIND_STORES, storeAPI.storeList);

export function* storesSaga(){
    yield takeLatest(FIND_STORES, findStoresSaga);
}

const initialState = {
    stores: null,
    error: null,
};

const stores = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [FIND_STORES]: state=>({
            ...state,
            stores: null,
            error: null,
        }),
        [FIND_STORES_SUCCESS]: (state, { payload: stores}) => ({
            ...state,
            stores,
        }),
        [FIND_STORES_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default stores;