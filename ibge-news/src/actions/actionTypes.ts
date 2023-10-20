export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export interface DataType {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: {
    image_intro: string;
    float_intro: string;
    image_intro_alt: string;
    image_intro_caption: string;
    image_fulltext: string;
    float_fulltext: string;
    image_fulltext_alt: string;
    image_fulltext_caption: string;
  };
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: DataType[];
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;