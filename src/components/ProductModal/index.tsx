import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/services/products.service";
import { moneyFormat } from "@/utils/moneyFormat";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  IconButton,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export interface iProductModalProps {
  isOpen: boolean;
  OnClose: () => void;
  id: number;
}

export const ProductModal: React.FC<iProductModalProps> = ({
  isOpen,
  OnClose,
  id,
}) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCart();

  const handeSubtraction = () => amount > 0 && setAmount(amount - 1);

  const product = getProductById(Number(id));
  return (
    <Modal
      isOpen={isOpen}
      onClose={OnClose}
      size={{ base: "sm", md: "md", lg: "4xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>{product.nome}</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex grow={1} gap="1rem" flexDir={{ base: "column", lg: "row" }}>
            <Image
              src={product.imagem}
              alt={"Imagem do produto: " + product.nome}
            />
            <Stack spacing="1rem">
              <Text>{product.descricao}</Text>
              <Text fontSize="xl" color="green">
                {moneyFormat(product.preco)}
              </Text>
              <InputGroup w="fit-content">
                <InputLeftElement>
                  <IconButton
                    icon={<AiOutlineMinus />}
                    aria-label="Remover"
                    onClick={handeSubtraction}
                  />
                </InputLeftElement>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <InputRightElement>
                  <IconButton
                    icon={<AiOutlinePlus />}
                    aria-label="Adicionar"
                    onClick={() => setAmount(amount + 1)}
                  />
                </InputRightElement>
              </InputGroup>
              <Button
                bgColor="orange.100"
                color="white"
                onClick={() => addToCart({ ...product, amount: amount })}
              >
                Adicionar ao carrinho
              </Button>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
