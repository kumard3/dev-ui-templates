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
          <title>Kumar Deepanshu</title>
          <meta
            name="description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Kumar Deepanshu" />
          <meta
            name="og:description"
            property="og:description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          />
          <meta
            property="og:site_name"
            content="Kumar deepanshu Personal Portfolio"
          />

          <meta name="twitter:card" content="It is my personal portfolio" />
          <meta name="twitter:title" content="Kumar Deepanshu" />
          <meta
            name="twitter:description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          />
          <meta name="twitter:site" content="@propernoun" />
          <meta name="twitter:creator" content="@propernounco" />

          <meta
            property="og:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          />
          <meta
            name="twitter:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://portfolio-templte.pages.dev/"
          />
          <meta property="og:title" content="Kumar Deepanshu" />
          <meta
            property="og:description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          />
          <meta
            property="og:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          />
          <meta property="og:site_name" content="Kumar Deepanshu" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://portfolio-templte.pages.dev/"
          />
          <meta property="twitter:title" content="Kumar Deepanshu" />
          <meta
            property="twitter:description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          />
          <meta
            property="twitter:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          />
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />

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
