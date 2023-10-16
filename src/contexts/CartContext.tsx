import { Notify } from "@/components/Notify";
import { iCartContext } from "@/types/contexts";
import { iCartProduct, iProduct } from "@/types/stores";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { json } from "stream/consumers";

export const CartContext = createContext<iCartContext>({} as iCartContext);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<iCartProduct[]>([]);

  const addToCart = (product: iCartProduct) => {
    const hasProduct = cartProducts.findIndex((item) => item.id === product.id);

    let productsCopy = [...cartProducts];

    if (hasProduct >= 0) {
      productsCopy[hasProduct].amount += 1;
      setCartProducts(productsCopy);
    } else {
      productsCopy = [...cartProducts, product];
    }
    setCartProducts(productsCopy);
    localStorage.setItem("cart", JSON.stringify(productsCopy));
    Notify("success", "Produto adicionado à sacola!");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCartProducts(JSON.parse(localStorage.getItem("cart") as string));
    }
  }, []);

  const removeToCart = (id: number) => {
    const updatedCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = useMemo(
    () => cartProducts?.reduce((act, cur) => act + cur.amount * cur.preco, 0),
    [cartProducts]
  );

  const clearCart = () => {
    setCartProducts([]);
    localStorage.setItem("cart", "[]")
  }

  return (
    <CartContext.Provider
      value={{ addToCart, removeToCart, cartProducts, total, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);