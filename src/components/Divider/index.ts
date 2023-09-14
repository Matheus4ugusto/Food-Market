import { css, styled } from "styled-components";

export interface iDividerProps {
  orientation?: "horizontal" | "vertical";
}

export const Divider = styled.hr<iDividerProps>`
  background-color: ${({ theme }) => theme.colors.gray[400]};

  ${({ theme, orientation }) => {
    switch (orientation) {
      case "vertical":
        return css`
          height: 100%;
          width: 2px;
        `;
      default:
        return css`
          height: 2px;
          width: 100%;
        `;
    }
  }}
`;
