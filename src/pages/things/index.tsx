import {FC} from "react"
import {GetStaticProps} from "next"
import Link from "next/link"

import prisma, {Thing} from "datasources/prisma"

interface Props {
  things: Thing[]
}

const getStaticProps: GetStaticProps<Props> = async () => {
  const things = await prisma.thing.findMany()

  return {
    props: {things},
    revalidate: 30
  }
}

const ThingsPage: FC<Props> = ({things}) => {
  return (
    <div className="p-5">
      <h2>Things: </h2>
      <ul className="list-disc list-inside">
        {things.map(({id, name}) => (
          <li key={id}>
            <Link href={`/things/${id}`} className="text-blue-600">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThingsPage
export {getStaticProps}
