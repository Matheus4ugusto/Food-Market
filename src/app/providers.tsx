"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "@/contexts/AuthContext";
import { customTheme } from "@/styles/chackraTheme";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <CacheProvider>
    <ChakraProvider theme={customTheme}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </CacheProvider>
);

export default Providers;
