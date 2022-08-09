import {CreateNextContextOptions} from "@trpc/server/adapters/next"

import prisma, {PrismaClient} from "datasources/prisma"

interface Context {
  prisma: PrismaClient
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createContext = (options?: CreateNextContextOptions): Context => {
  return {prisma}
}

export default createContext
export type {Context}
