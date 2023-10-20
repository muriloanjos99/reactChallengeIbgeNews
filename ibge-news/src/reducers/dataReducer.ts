// dataReducer.ts
import * as actionTypes from "../actions/actionTypes";

interface DataState {
  data: actionTypes.DataType[];
  error: string | null;
}

const initialState: DataState = {
  data: [],
  error: null,
};

const dataReducer = (
  state: DataState = initialState,
  action: actionTypes.DataActionTypes
): DataState => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: null,
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
