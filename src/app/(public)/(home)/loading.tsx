"use client"

import { Center, Heading, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center w="100vw" h="100vh">
      <Heading fontSize="2xl">
        Food{" "}
        <Text as="span" color="orange.100">
          Market
        </Text>
      </Heading>
      <Spinner 
      size={{base: "sm", md: "xl"}}
      color="orange.100"
      />
    </Center>
  );
}
