import { combineReducers } from "redux";
import user from "./slice/usersSlice";

const reducers = combineReducers({
    user
});

export default reducers;
