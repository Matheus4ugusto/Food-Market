import { TypeOptions, toast } from "react-toastify";

export const Notify = (type: TypeOptions, message: string) => {
  toast(message, {
    type: type,
  });
  return false;
};
