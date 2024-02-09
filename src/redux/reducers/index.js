import { combineReducers } from "redux";
import courses from "../../components/features/courses/redux/courseReducer";
import authors from "../../components/features/courses/redux/authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
