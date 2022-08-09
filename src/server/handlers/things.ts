import {router} from "@trpc/server"
import {z} from "zod"

import {Context} from "server/context"

const thingsHandlers = router<Context>()
  .query("list", {
    resolve: async ({ctx}) => {
      const things = await ctx.prisma.thing.findMany()

      return things
    }
  })
  .query("get", {
    input: z.number(),
    resolve: async ({ctx, input}) => {
      const thing = await ctx.prisma.thing.findUnique({
        where: {id: input}
      })

      return thing
    }
  })

export default thingsHandlers
