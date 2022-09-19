import '../styles/globals.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import theme from '../theme';
import Layout from '../components/Layout/Layout';

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>erthasys</title>
      </Head>
      <WagmiConfig client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
