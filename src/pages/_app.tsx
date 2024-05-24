import '@mantine/core/styles.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import customTheme from '@theme/custom.theme';
import { AppLayout } from '@components/index';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { AppProvider } from '@store/provider';

const App = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={customTheme}>
    <ModalsProvider>
      <Head>
        <title>Arrow Flicks</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProvider>
    </ModalsProvider>
  </MantineProvider>
);

export default App;
