import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import axiosMiddleware from "./middlewares/redux.axios.middleware";
import rootReducer from "./RootReducer";

const middlewares = [logger, axiosMiddleware];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
