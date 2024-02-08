import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as itemAPI from '../lib/api/item';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import produce from 'immer';

const INITIALIZE_FORM = 'item/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'item/CHANGE_FIELD';
const [
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
] = createRequestActionTypes('item/ADD_ITEM'); //store 찾기


export const changeForm = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
      form, // register , login
      key, // username, password, passwordConfirm
      value, // 실제 바꾸려는값
    })
  );

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const addItem = createAction(ADD_ITEM, ({storeId, name, price}) => ({
    storeId, name, price
}));

const addItemSaga = createRequestSaga(ADD_ITEM, itemAPI.addItem);

export function* itemSaga(){
    yield takeLatest(ADD_ITEM, addItemSaga);
}

const initialState = {
    add: {
        name: '',
        price: ''
    },
    delete: null,
    item: null,
    error: null,
};

const item = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, draft => {
          draft[form][key] = value; // 예: state.register.username을 바꾼다
        }),
      [INITIALIZE_FORM]: (state, { payload: form }) => ({
        ...state,
        [form]: initialState[form],
        error: null // 폼 전환 시 회원 인증 에러 초기화
      }),
        [ADD_ITEM_SUCCESS]: (state, { payload: item}) => ({
            ...state,
            item,
        }),
        [ADD_ITEM_FAILURE]: (state, { payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default item;