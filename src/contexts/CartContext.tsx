import { Notify } from "@/components/Notify";
import { iCartContext } from "@/types/contexts";
import { iCartProduct, iProduct } from "@/types/stores";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export const CartContext = createContext<iCartContext>({} as iCartContext);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<iCartProduct[]>([]);

  const addToCart = (product: iCartProduct) => {
    const hasProduct = cartProducts.findIndex((item) => item.id === product.id);

    let productsCopy = [...cartProducts];
    if (hasProduct >= 0) {
      console.log(hasProduct, product);
      productsCopy[hasProduct].amount += 1;
      setCartProducts(productsCopy);
    } else {
      const productCopy = { ...product, amount: 1 };
      setCartProducts([...cartProducts, productCopy]);
    }

    Notify("success", "Produto adicionado à sacola!");
  };

  const removeToCart = (id: number) =>
    setCartProducts(cartProducts.filter((item) => item.id !== id));

    const total = useMemo(
      () => cartProducts.reduce((act, cur) => act + (cur.amount * cur.preco), 0),
      [cartProducts]
    );

  return (
    <CartContext.Provider value={{ addToCart, removeToCart, cartProducts, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
