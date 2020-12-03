import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchingData from '../reducers/searching';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

//quitar en productivo
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

//---------------
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['searching' ]
}

//-------------

const rootReducer =combineReducers({
    searchingData
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor};
};