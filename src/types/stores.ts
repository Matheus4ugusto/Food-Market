export interface iProduct {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
  loja_id: number;
}

export interface iCartProduct extends iProduct {
  amount: number;
}
