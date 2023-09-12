"use client";

import { Button } from "../Button";
import Input from "../Input";
import { StyleLink } from "../Link";
import * as S from "./header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle, BiSolidCartAlt, BiLogOutCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  Button as ChakraButton,
  MenuItem,
  MenuList,
  IconButton as icoChakra,
} from "@chakra-ui/react";
import Link from "next/link";
import IconButton from "../IconButton";
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
          <h1>Food Market</h1>
          <div className="input_box">
            <Input placeholder="Busque por..."></Input>
            <IconButton aria-label="Search" icon={AiOutlineSearch} />
          </div>

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
