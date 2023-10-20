import { DataType, FavType } from "../../Utils/types";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const  ADD_FAVORITE = "ADD_FAVORITE";
export const  REMOVE_FAVORITE = "REMOVE_FAVORITE";


export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: DataType;
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: FavType;
}

export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: FavType;
}

export type DataActionTypes =
  | RemoveFavoriteAction
  | AddFavoriteAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;