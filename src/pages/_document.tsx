import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <ColorSchemeScript />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
