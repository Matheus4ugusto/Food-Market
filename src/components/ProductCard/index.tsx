import { moneyFormat } from "@/utils/moneyFormat";
import {
  Card,
  CardBody,
  Heading,
  Image,
  ResponsiveValue,
  Stack,
  StyleProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ProductModal } from "../ProductModal";

export interface iProductCardProps {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  direction: "column" | "row";
  loja_id: number;
}

export const ProductCard: React.FC<iProductCardProps> = ({
  nome,
  preco,
  descricao,
  imagem,
  direction,
  id,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ProductModal
        isOpen={isOpen}
        OnClose={onClose}
        product={{ nome, preco, descricao, imagem, id, loja_id: 0 }}
      />
      <Card
        maxW={direction == "row" ? "100%" : "sm"}
        _hover={{ transform: "scale(1.01)" }}
        transition="all .3s"
        as="li"
        direction={{ base: "column", lg: direction}}
        w="100%"
        cursor="pointer"
        onClick={onOpen}
      >
        {direction === "row" && (
          <Image
            objectFit="cover"
            src={imagem}
            alt={`Imagem do produto: ${nome}`}
            title={nome}
          />
        )}
        <CardBody>
          {direction !== "row" && (
            <Image
              src={imagem}
              alt={`Imagem do produto: ${nome}`}
              title={nome}
            />
          )}
          <Stack>
            <Heading size="md">{nome}</Heading>
            <Text noOfLines={3}>{descricao}</Text>
            <Text color="green.300">{moneyFormat(preco)}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
