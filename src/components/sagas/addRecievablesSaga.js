import { takeEvery, put, call } from 'redux-saga/effects';

function* addRecievableAction(action) {
  yield put({ type: 'ADD_RECIEVABLE_REQUEST_INITIATED'});

  try {
    yield put({
      type: 'ADD_RECIEVABLE_REQUEST_SUCCESS',
      payload: action.payload
    });
  } catch (error){
    console.log(error);
  }
}

function* addRecievablesSaga() {
  yield takeEvery('ADD_RECIEVABLE_REQUEST', addRecievableAction);
}

export default addRecievablesSaga;
