import { iSignIn, iSignInData } from "@/types/userAccess";
import { api } from "./api";

export const login = async (values: iSignInData) => {
  const { data } = await api.post("login", values);

  return data
};
