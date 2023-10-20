import * as types from "../../Utils/types";
import * as actionTypes from "./actionTypes";

export const fetchDataSuccess = (data: types.DataType): actionTypes.FetchDataSuccessAction => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): actionTypes.FetchDataFailureAction => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: error,
});

export const addFavorite = (data: types.FavType): actionTypes.AddFavoriteAction => ({
  type: actionTypes.ADD_FAVORITE,
  payload: data,
});

export const removeFavorite = (data: types.FavType): actionTypes.RemoveFavoriteAction => ({
  type: actionTypes.REMOVE_FAVORITE,
  payload: data,
})
