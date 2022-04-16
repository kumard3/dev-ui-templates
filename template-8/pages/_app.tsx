import "../styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "../components/BottomNav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <h1 className="Yellowtail text-5xl py-4 px-5">Kumar Deepanshu</h1>
      <Component {...pageProps} />
      <BottomNav />
    </ThemeProvider>
  );
}

export default MyApp;
