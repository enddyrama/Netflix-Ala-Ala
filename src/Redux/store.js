import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Reducer/index'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
