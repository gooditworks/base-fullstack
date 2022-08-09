import {router} from "@trpc/server"

import serverTimeHandler from "./handlers/serverTime"

const appRouter = router().merge(serverTimeHandler)

type AppRouter = typeof appRouter

export default appRouter
export type {AppRouter}
