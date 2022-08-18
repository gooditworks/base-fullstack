import {router} from "@trpc/server"

import {Context} from "./context"
import serverTimeHandler from "./handlers/serverTime"
import thingsHandlers from "./handlers/things"

const appRouter = router<Context>()
  .merge(serverTimeHandler)
  .merge("things.*", thingsHandlers)

type AppRouter = typeof appRouter

export default appRouter
export type {AppRouter}
