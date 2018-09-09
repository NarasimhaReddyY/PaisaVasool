import { fork } from 'redux-saga/effects';

import addRecievablesSaga from './addRecievablesSaga';

export default function* rootSaga() {
  yield fork(addRecievablesSaga);
}
