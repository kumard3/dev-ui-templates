import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>NFT Page</title>
          <meta
            name="description"
            content="A Nft Landing Page"
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="NFT Landing Page" />
          <meta
            name="og:description"
            property="og:description"
            content="A Nft Landing Page"
          />
          <meta
            property="og:site_name"
            content="NFT Landing Page"
          />

          <meta name="twitter:card" content="It is my personal portfolio" />
          <meta name="twitter:title" content="NFT Landing Page" />
          <meta
            name="twitter:description"
            content="A Nft Landing Page"
          />
          <meta name="twitter:site" content="@propernoun" />
          <meta name="twitter:creator" content="@propernounco" />

          <meta
            property="og:image"
            content="https://dev-ui-templates.pages.dev/ogImage.png"
          />
          <meta
            name="twitter:image"
            content="https://dev-ui-templates.pages.dev/ogImage.png"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dev-ui-templates.pages.dev/"
          />
          <meta property="og:title" content="NFT Landing Page" />
          <meta
            property="og:description"
            content="A Nft Landing Page"
          />
          <meta
            property="og:image"
            content="https://dev-ui-templates.pages.dev/ogImage.png"
          />
          <meta property="og:site_name" content="NFT Landing Page" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://dev-ui-templates.pages.dev/"
          />
          <meta property="twitter:title" content="NFT Landing Page" />
          <meta
            property="twitter:description"
            content="A Nft Landing Page"
          />
          <meta
            property="twitter:image"
            content="https://dev-ui-templates.pages.dev/ogImage.png"
          />
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
