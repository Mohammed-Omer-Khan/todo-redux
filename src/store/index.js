import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = _ => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );
};
export default configureStore;