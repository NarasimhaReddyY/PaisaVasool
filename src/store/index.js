import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../components/sagas/index';
import { rootReducer } from '../reducers/index';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
                rootReducer,
                applyMiddleware(logger, sagaMiddleware)
              );

sagaMiddleware.run(rootSaga);
