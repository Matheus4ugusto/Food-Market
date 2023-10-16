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
import { use, useEffect, useState } from "react";
import ProductCard, { iProductCardProps } from "@/components/ProductCard";
import { getProducts, getStoreById } from "@/services/store.service";
import { iStoreCardProps } from "@/components/StoreCard";

export interface iLojaProps {
  params: {
    id: string;
  };
}

export default function Loja({ params: { id } }: iLojaProps) {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState<iStoreCardProps>({} as iStoreCardProps);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts(Number(id));
        const storeData = await getStoreById(Number(id));
        setProducts(data);
        setStore(storeData);
      } catch (error) {
        console.error("Um erro estranho aconteceu", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Flex
      bg="gray.50"
      direction="column"
      align="center"
      mt="2"
      minH="100vh"
      p={{ base: "0 5%", lg: "0 17%" }}
    >
      <Flex as="header" flexDir="column">
        <Image
          src="https://placehold.co/1200x250"
          alt={"Imagem de capa da empresa:" + store.nome}
          borderRadius="10px"
        />
      </Flex>
      <Flex
        align="center"
        gap="1rem"
        mt="2rem"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Image
          src="https://placehold.co/100"
          alt={"Logo da empresa:" + store.nome}
          borderRadius="full"
        />
        <Heading fontSize="1.5rem">{store.nome}</Heading>
        <StarRating nota={store.nota} />
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
            {products?.map((product: iProductCardProps, index) => (
              <ProductCard {...product} key={index} />
            ))}
          </Flex>
        </Box>
        <Box mt="2rem" w="100%">
          <Heading fontSize="lg">Produtos</Heading>
          <Divider bg="gray.500" />
          <Flex direction="column" gap={4} wrap="wrap" mt={2}>
            {products?.map((product: iProductCardProps, index) => (
              <ProductCard {...{...product, direction: "row"}} key={index} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
