"use client";

import { Button } from "../Button";
import { StyleLink } from "../Link";
import * as S from "./header.style";
import { BiUserCircle, BiSolidCartAlt, BiLogOutCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  Button as ChakraButton,
  MenuItem,
  MenuList,
  IconButton as icoChakra,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const { isLoged, user, logOut } = useAuth();
  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <p>Welcome to Food Market</p>
          <div className="auth_nav">
            {!isLoged ? (
              <>
                <StyleLink href="/login">Login</StyleLink>
                <StyleLink href="/register">Cadastre-se</StyleLink>
              </>
            ) : (
              <p>Olá {user?.nome}</p>
            )}
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <Heading fontSize="2xl">
            Food{" "}
            <Text as="span" color="orange.100">
              Market
            </Text>
          </Heading>

          <S.Nav>
            <Menu>
              <MenuButton as={icoChakra} icon={<BiUserCircle />}></MenuButton>
              <MenuList>
                {isLoged ? (
                  <>
                    <MenuItem as={Link} href="/perfil">
                      Perfil
                    </MenuItem>
                    <MenuItem
                      as={ChakraButton}
                      leftIcon={<BiLogOutCircle />}
                      onClick={logOut}
                    >
                      {" "}
                      Sair
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem as={Link} href="/register">
                    Criar Conta
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
            <Button variant="unstyled">
              <BiSolidCartAlt />
              Carrinho
            </Button>
          </S.Nav>
        </S.HeaderCenter>
      </S.Header>
    </>
  );
};

export default Header;
