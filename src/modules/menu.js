import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as storeAPI from '../lib/api/store';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'menu/INITIALIZE'; // 모든 내용 초기화
const [
    FIND_MENU,
    FIND_MENU_SUCCESS,
    FIND_MENU_FAILURE,
] = createRequestActionTypes('menu/FIND_MENU'); //store 찾기

export const findMenu = createAction(FIND_MENU, (storeId) => ({
    storeId
}));

const findMenuSaga = createRequestSaga(FIND_MENU, storeAPI.menuList);

export function* menuSaga(){
    yield takeLatest(FIND_MENU, findMenuSaga);
}

const initialState = {
    menuInfo: null,
    error: null,
};

const menu = handleActions(
    {
        [FIND_MENU]: state=>({
            ...state,
            menuInfo: null,
            error: null,
        }),
        [FIND_MENU_SUCCESS]: (state, { payload: menuInfo}) => ({
            ...state,
            menuInfo,
        }),
        [FIND_MENU_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default menu;