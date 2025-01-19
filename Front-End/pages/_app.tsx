import type { AppProps } from 'next/app';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '@/styles/global-style';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import Head from 'next/head';

const App = ({ Component, pageProps:{session, ...pageProps} }: AppProps) => {

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Head>
          <title>GETCODE</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
export default App;