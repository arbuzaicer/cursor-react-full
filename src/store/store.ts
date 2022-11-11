import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./RootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
