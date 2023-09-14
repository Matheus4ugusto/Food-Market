"use client";

import BannerCard from "@/components/BannerCards/indes";
import SearchForm from "@/components/SearchForm";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import StoreCard from "@/components/StoreCard"

export default function Home() {
  return (
    <Flex
      mt="3rem"
      as="main"
      flexDir={{ base: "column"}}
      alignItems="center"
      p={{ lg: "0 20%", base: "0 5%" }}
    >
      <Heading textAlign="center" mb="1rem">As Melhores comidas e Mequis do Brasil!</Heading>
      <Text pb="2rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        aspernatur unde suscipit quia.
      </Text>
      <SearchForm />

      <Flex mt="2rem" w={{base: "90%", md: "80%", lg: "90%"}} gap="2rem" flexDir={{base: "column", md: "row"}}>
        <BannerCard
          text="Lanches"
          link="/"
          src="/hamburguer.png"
          color="orange"
        />
        <BannerCard
          text="Mercados"
          link="/"
          src="/carrinho.png"
          color="green"
        />
      </Flex>
      <Box w="100%" mt="2rem" as="section" maxW="90vw">
        <Heading fontSize="2xl">Lojas</Heading>
        <Stack direction={{base: "column", lg: "row"}} wrap="wrap">
          <StoreCard
          id={1}
          nome="Emici Donaids"
          nota={4.5}
          categoria="lanches"
          distancia="1.2km"
          tempo="30-40 min"
          taxaEntrega={0}
          image_logo="https://placehold.co/100"
          path="/"
          />
          <StoreCard
          id={1}
          nome="Emici Donaids"
          nota={4.5}
          categoria="lanches"
          distancia="1.2km"
          tempo="30-40 min"
          taxaEntrega={0}
          image_logo="https://placehold.co/100"
          path="/"
          />
          <StoreCard
          id={1}
          nome="Emici Donaids"
          nota={4.5}
          categoria="lanches"
          distancia="1.2km"
          tempo="30-40 min"
          taxaEntrega={0}
          image_logo="https://placehold.co/100"
          path="/"
          />
          <StoreCard
          id={1}
          nome="Emici Donaids"
          nota={4.5}
          categoria="lanches"
          distancia="1.2km"
          tempo="30-40 min"
          taxaEntrega={0}
          image_logo="https://placehold.co/100"
          path="/"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
