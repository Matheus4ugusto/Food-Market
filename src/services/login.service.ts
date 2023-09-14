import { iSignIn } from "@/types/userAccess";

export const login = (values: iSignIn) => {
  return {
    id: 1,
    nome: "Filipe",
    email: values.email,
  };
};
