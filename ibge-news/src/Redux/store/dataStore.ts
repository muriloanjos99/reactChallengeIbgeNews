import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import dataReducer from '../reducers/dataReducer';

const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
