"use client";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/chackraTheme";
import AuthContextProvider from "@/contexts/AuthContext";
import CartProvider from "@/contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <CartProvider>
              <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={4000}
                hideProgressBar
              />
              {children}
            </CartProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
