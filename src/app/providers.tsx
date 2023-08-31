'use client'

import { ThemeProvider } from "styled-components";
import  theme  from '@/styles/theme';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers