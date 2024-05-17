import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import customTheme from '@theme/custom.theme';
import { ModalsProvider } from '@mantine/modals';
import { MainLayout } from '@components/index';
import { AppProps } from 'next/app';
import { AppWrapper } from '@store/provider';

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
      <AppWrapper>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppWrapper>
    </ModalsProvider>
  </MantineProvider>
);

export default App;
