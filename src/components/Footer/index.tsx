import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => (
  <Flex
    as="footer"
    p={4}
    gap={2}
    justify="space-between"
    align="center"
    borderTop="solid 1px rgba(0,0,0,0.50)"
    mt="3rem"
    flexDir={{base: "column", md: "row"}}
  >
    <Flex direction="column">
      <Heading fontSize="2xl">
        Food{" "}
        <Text as="span" color="orange.100">
          Market
        </Text>
      </Heading>
      <Text>&copy; FoodMarket 2023 - Todos os direitos reservados.</Text>
    </Flex>
    <Box>
      <Heading fontSize="1rem">Redes Sociais</Heading>
      <Flex gap={1}>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <FaYoutube />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook />
        </Link>
      </Flex>
    </Box>
  </Flex>
);

export default Footer;
