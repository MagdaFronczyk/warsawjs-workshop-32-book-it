import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  loadState,
  saveState
} from '../services/localStorage';
import rootReducer from './rootReducer';

const persistedState = loadState();
console.log(persistedState)

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => {
  saveState(store.getState())
});

export default store;