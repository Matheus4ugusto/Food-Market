import { InputHTMLAttributes } from "react";
import * as S from "./input.style";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
  variant?: string;
}

const Input: React.FC<iInputProps> = ({variant, placeholder, ...rest}) =>
  variant === "float" ? (
    <S.InputBox>
        <label>{placeholder}</label>    
      <S.Input variant={variant} {...rest} />
      <span />
    </S.InputBox>
  ) : (
    <S.Input variant={variant} {...rest} />
  );

export default Input;
