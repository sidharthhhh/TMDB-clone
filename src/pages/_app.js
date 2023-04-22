import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from "@material-tailwind/react";


export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
