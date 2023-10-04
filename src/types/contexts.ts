import { iCartProduct, iProduct } from "./stores";
import { iSignIn, iUser } from "./userAccess";

export interface iAuthContext {
  signIn: (values: iSignIn) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
}

export interface iCartContext {
  addToCart: (product: iCartProduct) => void;
  cartProducts: iCartProduct[];
  removeToCart: (id: number) => void;
  total: number;
}
