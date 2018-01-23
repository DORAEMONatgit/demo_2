import { call, put, takeLatest } from 'redux-saga/effects';

function delayedAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('some delayed action');
    }, 2000);
  });
}

function* getDelayedData() {
  const data = yield call(delayedAPI);
  yield put({
    type: 'testing_api_done',
    data,
  });
}

export function* rootSaga() {
  yield takeLatest('testing', getDelayedData);
}
