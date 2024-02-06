import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  console.log(type);
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    console.log(action.payload);
    try {
      const response = yield call(request, action.payload);
      console.log(response.data, action.payload);
      if (response.data) {
        yield put({
          type: SUCCESS,
          payload: response.data,
          meta: response
        });
        console.log(response.data, "success 받은 리스폰스");
      } else {
        // response.data가 없는 경우에 대한 처리
        console.log('response.data가 없습니다.');
      }
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}