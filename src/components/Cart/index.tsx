import { useCart } from "@/contexts/CartContext";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import CartProduct from "../CartProduct";
import { moneyFormat } from "@/utils/moneyFormat";
import { useRouter } from "next/navigation";

export interface iCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<iCartProps> = ({ isOpen, onClose }) => {
  const { cartProducts, total } = useCart();
  const { push } = useRouter();

  const redirectChekout = () => {
    push("/checkout");
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrinho</DrawerHeader>
        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <Stack>
            {cartProducts?.length ? (
              cartProducts?.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))
            ) : (
              <Heading>O carrinho está vazio</Heading>
            )}
          </Stack>
          <Box>
            <Flex w="100%" justifyContent="space-between">
              <Text>Total</Text>
              <Text>{moneyFormat(total ?? "0")}</Text>
            </Flex>
            <Button
              bgColor={cartProducts?.length ? "green" : "gray"}
              color="#fff"
              w="100%"
              mt="2rem"
              disabled={cartProducts?.length ? false : true}
              _hover={{ bgColor: "green.300" }}
              onClick={cartProducts?.length ? redirectChekout : () => {}}
            >
              Finalizar
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
