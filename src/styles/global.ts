"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
}

body{
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
}

button{
    cursor: pointer;
    background-color: transparent;
    border: none;
}
`;

export default GlobalStyles;
