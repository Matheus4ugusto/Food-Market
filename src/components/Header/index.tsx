"use client";

import { Input } from "../Input";
import { StyleLink } from "../Link";
import * as S from "./header.style";

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
          <Input placeholder="Busque por..." ></Input>
        </S.HeaderCenter>
      </S.Header>
    </>
  );
};

export default Header;
