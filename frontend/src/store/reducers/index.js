import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from './productReducer';
import offerReducer from './offerReducer';
import accountReducer from './accountReducer';


const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  productReducer,
  offerReducer,
  accountReducer
});

export default rootReducer;
