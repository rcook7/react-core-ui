import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { rootSaga } from './sagas';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const configureStore = (history) => {
  const sagaMiddleware = createSagaMiddleware()
  const routerHistory = routerMiddleware(history)

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: formReducer
    }),
    applyMiddleware(sagaMiddleware, routerHistory)
  );
  sagaMiddleware.run(rootSaga)

  return store;
}

export default configureStore;