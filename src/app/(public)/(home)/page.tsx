"use client";

import SearchForm from "@/components/SearchForm";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      mt="3rem"
      as="main"
      flexDir={{ base: "column" }}
      alignItems="center"
      p={{ lg: "0 20%" }}
    >
      <Heading mb="1rem">As Melhores comidas e Mequis do Brail!</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        aspernatur unde suscipit quia.
      </Text>
      <SearchForm />
    </Flex>
  );
}
