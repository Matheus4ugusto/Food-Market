"use client";

import { Button } from "../Button";
import IconButton from "../IconButton";
import { Input } from "../Input";
import { StyleLink } from "../Link";
import * as S from "./header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle, BiSolidCartAlt } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <p>Welcome to Eco Market</p>
          <div>
            <StyleLink href="/login">Login</StyleLink>
            <span />
            <StyleLink href="/register">Cadastre-se</StyleLink>
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <h1>Eco Market</h1>
          <div>
            <Input placeholder="Busque por..."></Input>
            <IconButton icon={AiOutlineSearch} />
          </div>

          <S.Nav>
            <Button variant="unstyled">
              <BiUserCircle />
              Perfil
            </Button>
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
