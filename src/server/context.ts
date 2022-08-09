import {CreateNextContextOptions} from "@trpc/server/adapters/next"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createContext = (options?: CreateNextContextOptions): Context => {
  return {}
}

export default createContext
export type {Context}
