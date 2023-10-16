import { iCartProduct, iProduct } from "./stores";
import { iSignIn, iSignInData, iSignUpData, iUser } from "./userAccess";

export interface iAuthContext {
  signIn: (values: iSignInData) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
  signUp: (values: iSignUpData) => void;
}

export interface iCartContext {
  addToCart: (product: iCartProduct) => void;
  cartProducts: iCartProduct[];
  removeToCart: (id: number) => void;
  total: number;
  clearCart: () => void;
}
