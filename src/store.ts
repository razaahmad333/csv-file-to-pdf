import { createStore } from "redux";
import { userReducer } from "./reduxStuffs/user/reducer";
export const store = createStore(userReducer);
