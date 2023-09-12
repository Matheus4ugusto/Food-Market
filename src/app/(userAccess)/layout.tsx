import GlobalStyles from "@/styles/global";
import { Metadata } from "next";
import Providers from "../providers";
import StyledComponentsRegistry from "../regystry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{
          display: "flex",
          background:
            "linear-gradient(90deg, rgba(214,65,2,1) 14%, rgba(203,132,0,1) 100%)",
        }}
      >
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          hideProgressBar
        />
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
