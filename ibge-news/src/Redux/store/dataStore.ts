// configureStore.ts
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import dataReducer from "../reducers/dataReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
