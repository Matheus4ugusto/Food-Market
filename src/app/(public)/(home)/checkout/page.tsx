"use client";

import {
  Button,
  Center,
  Divider,
  Heading,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import { moneyFormat } from "@/utils/moneyFormat";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Notify } from "@/components/Notify";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
  const [cartProducts, setCartProducts] = useState([]);
  const { clearCart, total } = useCart();
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCartProducts(JSON.parse(localStorage.getItem("cart") as string));
    }
  }, []);

  const handleFinishPurchase = () => {
    setCartProducts([]);
    clearCart();
    Notify("success", "Compra finalizada, estamos enviando seu pedido!");
    push("/");
  };

  return (
    <Center flexDir="column" p={{ base: "2rem 1rem", lg: "3rem 20%" }}>
      <Heading>Confirmar pedido</Heading>
      <Divider m="1rem 0" />
      <Stack>
        {cartProducts?.map((e: any, index: number) => (
          <Stat key={index}>
            <StatLabel>{e.nome}</StatLabel>
            <StatNumber>
              {moneyFormat(e.preco * e.amount)} {`x${e.amount}`}
            </StatNumber>
          </Stat>
        ))}
      </Stack>
      <Heading>Total {moneyFormat(total)}</Heading>
      <Button onClick={handleFinishPurchase}>Finalizar Compra</Button>
    </Center>
  );
}
