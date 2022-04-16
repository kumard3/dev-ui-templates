import "../styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "../components/BottomNav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <BottomNav />
    </ThemeProvider>
  );
}

export default MyApp;
