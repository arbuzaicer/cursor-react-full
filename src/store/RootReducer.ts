import { combineReducers } from "redux";

import AuthReducer from "modules/auth/auth-store/Auth.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
