import {createReactQueryHooks} from "@trpc/react"

import type {AppRouter} from "server/router"
import env from "env"

const TRPC_API_PATH = "/api/trpc"

const config = {
  ssr: false,
  config() {
    if (typeof window !== "undefined") {
      return {url: TRPC_API_PATH}
    }

    if (env.vercelUrl) {
      return {url: `https://${env.vercelUrl}${TRPC_API_PATH}`}
    }

    return {url: `http://localhost:${env.port}${TRPC_API_PATH}`}
  }
}

const {useQuery, useMutation, ...hooks} = createReactQueryHooks<AppRouter>()

export {useQuery, useMutation, hooks, config}
