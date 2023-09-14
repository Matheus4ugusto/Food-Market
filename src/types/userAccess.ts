export interface iSignIn {
  email: string;
  senha: string;
}

export interface iSignUp {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

export interface iUser {
  id: number;
  nome: string;
  email: string;
}
