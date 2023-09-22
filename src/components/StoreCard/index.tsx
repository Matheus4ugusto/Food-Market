import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import StarRating from "../StarRating";

export interface iStoreCardProps {
  id: number;
  nome: string;
  categoria: string;
  image_logo: string;
  nota: number;
  path: string;
  distancia: string;
  tempo: string;
  taxaEntrega: number;
}

const StoreCard: React.FC<iStoreCardProps> = ({
  image_logo,
  nome,
  nota,
  categoria,
  distancia,
  tempo,
  taxaEntrega,
  path,
  id,
}) => {
  return (
    <Flex
      as={Link}
      href={`loja/${id}`}
      p="1rem"
      bg="white"
      borderRadius="md"
      justifyContent="space-between"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
      transition="all .3s linear"
    >
      <Flex gap={4} align="center" justify="space-between">
        <Image
          src={image_logo}
          alt={"Logo da loja" + nome}
          borderRadius="full"
        />
        <Flex flexDir="column" gap={3}>
          <Heading fontSize="1rem">{nome}</Heading>
          <Flex gap={2} fontSize="0.9rem" color="blackAlpha.700">
            <StarRating nota={nota} />
            <span>•</span>
            <Text>{categoria}</Text>
            <span>•</span>
            <Text>{distancia}</Text>
          </Flex>
          <Flex gap={2} fontSize="0.9rem" color="blackAlpha.700">
            <Text>{tempo}</Text>
            <span>•</span>
            <Text>{taxaEntrega}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoreCard;
