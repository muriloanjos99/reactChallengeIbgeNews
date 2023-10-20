export interface ItemType {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

export interface DataType {
  count: number;
  items: ItemType[];
  nextPage: number;
  page: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  totalPages: number;
}

export interface FavType {
  titulo: string;
  introducao: string;
  link: string;
  data_publicacao: string;
}
