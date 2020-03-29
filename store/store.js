import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;
