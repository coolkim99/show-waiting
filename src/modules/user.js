import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, takeEvery } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'user/INITIALIZE'; // 모든 내용 초기화
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
  );


// export const tempSetUser = createAction(user, user => user);
export const check = createAction(CHECK,(id) => ({id}));

const checkSaga = createRequestSaga(CHECK, authAPI.check);

export function* userSaga() {
    yield takeEvery(CHECK, checkSaga);
  }

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHECK]: state=>({
        ...state,
        user: null,
        checkError: null,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
        ...state,
        user,
        checkError: null,
      }),
    [CHECK_FAILURE]: (state, { payload: checkError}) => ({
        ...state,
        checkError,
    }),
  },
  initialState,
);