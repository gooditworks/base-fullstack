import {createNextApiHandler} from "@trpc/server/adapters/next"
import {withSentry} from "@gooditworks/monitoring/next"

import router from "server/router"
import createContext from "server/context"

const handler = createNextApiHandler({router, createContext})

export default withSentry(handler)
