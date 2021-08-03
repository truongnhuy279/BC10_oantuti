import { combineReducers } from "redux";
import OanTuXiReducer from "./OanTuXiReducer";

const rootReducer = combineReducers({
  // thư mục state con
  OanTuXiReducer, // state bập oẳn tù xì
});

export default rootReducer;
