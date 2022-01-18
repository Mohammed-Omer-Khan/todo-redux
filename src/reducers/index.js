import { combineReducers } from "redux";
import websiteReducer from './reducer';

export default combineReducers({
  website: websiteReducer
});