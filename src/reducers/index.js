import { combineReducers } from "redux";
import eventReducer from "./event.reducer";
import userReducer from './user.reducer'

//add all your reducers here...
const appReducer = combineReducers({
  eventReducer,
  userReducer,
});

const rootReducer = (state, action) => {
  // do some logic here,
  return appReducer(state, action);
};

export default rootReducer;
