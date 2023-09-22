"use client";

import StarRating from "@/components/StarRating";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { moneyFormat } from "@/utils/moneyFormat";
import { use } from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    nome: "mequi mil",
    image: "https://placehold.co/398x157",
    preco: 15.78,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.",
  },
  {
    nome: "mequi mil",
    image: "https://placehold.co/398x157",
    preco: 15.78,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.",
  },
  {
    nome: "mequi mil",
    image: "https://placehold.co/398x157",
    preco: 15.78,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.",
  },
];

export interface iLojaProps {
  params: {
    id: string;
  };
}

export default function Loja({ params: { id } }: iLojaProps) {
  const dados: any = use(
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            nome: "Emici Donáids",
            nota: 4.5,
            categoria: "lanches",
            tempo: "30-40 min",
            distancia: "1.2km",
            taxaEntrega: 2.25,
          }),
        5000
      );
    })
  );

  return (
    <Flex bg="gray.50" direction="column" align="center" mt="2" minH="100vh" p={{base: "0 5%", lg: "0 17%"}}>
      <Flex as="header" flexDir="column">
        <Image
          src="https://placehold.co/1200x250"
          alt={"Imagem de capa da empresa:" + dados.nome}
          borderRadius="10px"
        />
      </Flex>
      <Flex align="center" gap="1rem" mt="2rem">
        <Image
          src="https://placehold.co/100"
          alt={"Logo da empresa:" + dados.nome}
          borderRadius="full"
        />
        <Heading fontSize="1.5rem">{dados.nome}</Heading>
        <StarRating nota={dados.nota} />
        <Flex ml="auto" gap={5}>
          <Button variant="unstyled" colorScheme="red">
            Ver Mais
          </Button>
          <Text as="small">
            <Icon as={AiFillDollarCircle} />
            Pedido Mínimo {moneyFormat(31.0)}
          </Text>
        </Flex>
      </Flex>
      <Box w={{ base: "90%", lg: "1200" }}>
        <Box mt="2rem">
          <Heading fontSize="lg">Destaques</Heading>
          <Divider bg="gray.500" />
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={4}
            wrap="wrap"
            mt={5}
          >
            {products?.map((product, index) => (
              <ProductCard {...product} key={index} />
            ))}
          </Flex>
        </Box>
        <Box mt="2rem" w="100%">
          <Heading fontSize="lg">Produtos</Heading>
          <Divider bg="gray.500" />
          <Flex direction="column" gap={4} wrap="wrap" mt={2}>
            {products?.map((product, index) => (
              <ProductCard direction="row" {...product} key={index} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
