import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from './sagas';

const sagaMidlleware = createSagaMiddleware();
const middleware = [sagaMidlleware];

const store = createStore(reducer, applyMiddleware(...middleware))

sagaMidlleware.run(rootSaga);

export default store;