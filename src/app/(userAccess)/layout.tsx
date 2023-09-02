import GlobalStyles from "@/styles/global";
import { Metadata } from "next";
import Providers from "../providers";


export const metadata: Metadata = {
  title: "Login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{display: "flex", background: "linear-gradient(90deg, rgba(214,65,2,1) 14%, rgba(203,132,0,1) 100%)"}}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
