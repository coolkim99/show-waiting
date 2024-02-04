import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as storeAPI from '../lib/api/store';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'store/INITIALIZE'; // 모든 내용 초기화
const UNLOAD_MENU = 'store/UNLOAD_MENU'; //store 비우기
const [
    FIND_MENU,
    FIND_MENU_SUCCESS,
    FIND_MENU_FAILIRE,
] = createRequestActionTypes('store/FIND_MENU'); //store 찾기

export const findMenu = createAction(FIND_MENU, ( id ) => ({
    id,
}));
export const unloadMenu = createAction(UNLOAD_MENU);

const findMenuSaga = createRequestSaga(FIND_MENU, storeAPI.storeMenu);

export function* menuSaga(){
    yield takeLatest(FIND_MENU, findMenuSaga);
}

const initialState = {
    menuInfo: null,
    error: null,
};

const store = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [FIND_MENU]: state=>({
            ...state,
            menuInfo: null,
            error: null,
        }),
        [FIND_MENU_SUCCESS]: (state, { payload: menuInfo}) => ({
            ...state,
            menuInfo,
        }),
        [FIND_MENU_FAILIRE]: (state, { payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_STORE]: () => initialState,
    },
    initialState,
);

export default store;