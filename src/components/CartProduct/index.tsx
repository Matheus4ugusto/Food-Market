import { useCart } from "@/contexts/CartContext";
import { iCartProduct } from "@/types/stores";
import { moneyFormat } from "@/utils/moneyFormat";
import {
  Card,
  CardBody,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";

const CartProduct: React.FC<iCartProduct> = ({
  nome,
  imagem,
  preco,
  amount,
  id,
}) => {
  const { removeToCart } = useCart();
  return (
    <Card direction="row" justifyContent="space-between" alignItems="center" p="0 1rem">
      <Image w="50px" h="50px" objectFit="contain" src={imagem} alt={"Imagem do produto: " + nome} />
      <Stack>
        <CardBody>
          <Text fontWeight="bold">{nome}</Text>
          <Text color="green">{moneyFormat(preco)}</Text>
          <Text>Quantidade: {amount}</Text>
        </CardBody>
      </Stack>
        <IconButton
          icon={<BiTrash />}
          aria-label="Remove"
          onClick={() => removeToCart(id)}
        />
    </Card>
  );
};

export default CartProduct;
