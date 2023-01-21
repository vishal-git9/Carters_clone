import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Navbar from '@/components/Navbar'
import "../styles/global.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme/theme.js'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      
      <Navbar/>
      <NextNProgress height={6}/>
  <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
  </>
}
