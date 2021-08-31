import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "./reducers/reducer";

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
