import {
  InputHTMLAttributes,
  KeyboardEventHandler,
  forwardRef,
  useState,
} from "react";
import * as S from "./input.style";
import { Box, Tooltip } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ variant, placeholder, error, ...rest }, ref) => {
    const [value, setValue] = useState("");

    const handleValue = (e: any) => setValue(e.target.value);

    return variant === "float" ? (
      <S.InputBox value={value} error={error}>
        <label>{placeholder}</label>
        <S.Input onKeyUp={handleValue} variant={variant} {...rest} ref={ref} />
        <span />
        {error && (
          <Tooltip hasArrow label={error} bg="red.600">
            <Box
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              mr="1rem"
              color="red.600"
            >
              <BsInfoCircleFill />
            </Box>
          </Tooltip>
        )}
      </S.InputBox>
    ) : (
      <S.Input placeholder={placeholder} variant={variant} {...rest} ref={ref} />
    );
  }
);

Input.displayName = "Input";

export default Input;
