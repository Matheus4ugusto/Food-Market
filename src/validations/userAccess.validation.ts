import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup.string().email("Formato de email inválido!").required("Email é obrigatório"),
  senha: yup.string().required("A senha é obrigatótia!"),
});

export const registerValidation = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Formato de email inválido!")
    .required("O email é obrigatório!"),
  senha: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "A senha precisa ter pelo menos um número, uma letra maiúscula e uma minúscula"
    ),
  confirmacaoSenha: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
