import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export interface iBannerCardProps {
  src: string;
  text: string;
  link: string;
  color: "orange" | "green";
}

const BannerCard: React.FC<iBannerCardProps> = ({ src, text, link, color }) => {
  return (
    <Flex
      position="relative"
      w={{ base: "100%", md: "50%" }}
      bgColor={color === "orange" ? "orange.100" : "green.200"}
      h="200px"
      p="1rem"
      flexDir="column"
      borderRadius="xl"
      overflow="hidden"
    >
      <Text color="white" fontSize="lg">
        {text}
      </Text>
      <Image
        w="60%"
        h="90%"
        objectFit="contain"
        src={src}
        alt={text}
        title={text}
        position="absolute"
        right="0"
        _hover={{ transform: "scale(1.1)" }}
        transition="all .3s"
      />
      <Button
        mt="1rem"
        variant="outline"
        color="white"
        as={Link}
        href={link}
        w="fit-content"
        _hover={{ color: color + ".100", bgColor: "white" }}
      >
        Ver Opções
      </Button>
    </Flex>
  );
};

export default BannerCard;
