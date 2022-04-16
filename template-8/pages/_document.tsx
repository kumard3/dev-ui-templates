import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import BottomNav from "../components/BottomNav";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
