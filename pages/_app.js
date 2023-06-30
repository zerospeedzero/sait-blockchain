import Navbar from '../Components/Navbar'
import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { Goerli } from "@thirdweb-dev/chains";
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import Header from '@/Components/Header';

export default function App({ Component, pageProps }) {
  return (
  <ThirdwebProvider
    activeChain={{
      ...Goerli,
      rpc: ["https://goerli.infura.io/v3/19a6a39387da412c885d134c648d857b"]
    }}
  > 
    <ThemeProvider>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  </ThirdwebProvider>
  )
}
