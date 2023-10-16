"use client";

import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Form } from "@/components/Form";
import { StyleLink } from "@/components/Link";
import { iSignIn } from "@/types/userAccess";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "@/validations/userAccess.validation";
import Input from "@/components/Input";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSignIn>({
    resolver: yupResolver(LoginValidation),
  });

  const handleLogin = (values: iSignIn) => {
    signIn({ email: values.email, password: values.senha });
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <h2>Olá, bem vindo de volta!</h2>
      <Input
        variant="float"
        id="email"
        placeholder="Seu email..."
        type="text"
        {...register("email")}
        error={errors?.email?.message}
      />
      <Input
        variant="float"
        type="password"
        id="password"
        placeholder="Sua senha..."
        {...register("senha")}
        error={errors?.senha?.message}
      />
      <Button type="submit">Entrar</Button>
      <Divider />
      <small>
        Não possui uma conta?{" "}
        <StyleLink href="/register"> Cadastre-se já</StyleLink>{" "}
      </small>
    </Form>
  );
}
