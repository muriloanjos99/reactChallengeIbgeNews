import * as actionTypes from "./actionTypes";

export const fetchDataSuccess = (data: actionTypes.DataType[]): actionTypes.FetchDataSuccessAction => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): actionTypes.FetchDataFailureAction => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: error,
});
