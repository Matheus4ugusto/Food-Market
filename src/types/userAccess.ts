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

export interface iSignUpData {
  name: string;
  email: string;
  password: string;
}

export interface iSignInData {
  email: string;
  password: string;
}
