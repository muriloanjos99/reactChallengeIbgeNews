import * as actionTypes from '../actions/actionTypes';
import * as types from '../../Utils/types';

export interface DataState {
  data: types.DataType | null;
  favNews: types.FavType[] | [];
  error: string | null;
}

const initialState: DataState = {
  data: null,
  favNews: [],
  error: null,
};

const dataReducer = (
  state: DataState = initialState,
  action: actionTypes.DataActionTypes,
): DataState => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        favNews: [...state.favNews, action.payload],
      };
    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favNews: state.favNews.filter((news) => news.link !== action.payload.link),
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
