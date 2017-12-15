import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {

  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, RootReducer)

const configureStore = () => {
  let store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  )
  
  let persistor = persistStore(store);
  return { persistor, store }
};

export default configureStore;
