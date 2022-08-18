import {PrismaClient} from "generated/prisma"

const client = new PrismaClient()

export default client
export * from "generated/prisma"
