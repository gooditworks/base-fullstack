import {AppProps} from "next/app"
import {withTRPC} from "@trpc/next"

import ErrorCapturer from "components/ErrorCapturer"
import {config as trpcConfig} from "datasources/trpc"

import "styles/globals.css"

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ErrorCapturer>
      <Component {...pageProps} />
    </ErrorCapturer>
  )
}

export default withTRPC(trpcConfig)(App)
export {reportWebVitals} from "next-axiom"
