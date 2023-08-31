import { styled } from "styled-components";

export const Input = styled.input`
  padding: 1rem;
  outline: solid 1px ${({ theme }) => theme.colors.brand.accent};
  border: none;
  border-radius: 10px;
`;
