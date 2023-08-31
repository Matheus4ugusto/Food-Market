import styled from "styled-components";

export const HeaderTop = styled.section`
  padding: 0.5rem 10%;
  background-color: ${({ theme }) => theme.colors.brand.accent};
  display: flex;
  justify-content: space-between;

  p {
    color: #fff;
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const Header = styled.header`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderCenter = styled.section`
  display: flex;
  padding: 1rem 10%;
  justify-content: space-between;
`;
