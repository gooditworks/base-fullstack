import {router} from "@trpc/server"

const serverTimeHandler = router().query("serverTime", {
  resolve: () => Date.now()
})

export default serverTimeHandler
