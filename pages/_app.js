import Navbar from '../Components/Navbar'
import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { Goerli } from "@thirdweb-dev/chains";
import '@/styles/globals.css'
// import { ThemeProvider } from 'next-themes';
import Header from '@/Components/Header';

export default function App({ Component, pageProps }) {
  return (
  <ThirdwebProvider
    activeChain={{
      ...Goerli,
    }}
    clientId="574b8b1c3b1296056e275782ef78a67f"
  > 
    {/*<ThemeProvider>*/}
      <Header/>
      <Component {...pageProps} />
    {/*</ThemeProvider> */}
  </ThirdwebProvider>
  )
}
