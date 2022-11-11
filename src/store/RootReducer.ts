import { combineReducers } from "redux";

import AuthReducer from "modules/auth/auth-store/Auth.reducer";
import MainReducer from "modules/main/main-store/Main.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
