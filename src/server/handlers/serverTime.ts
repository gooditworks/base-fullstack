import {router} from "@trpc/server"

import {Context} from "server/context"

const serverTimeHandler = router<Context>().query("serverTime", {
  resolve: () => Date.now()
})

export default serverTimeHandler
