import {FC} from "react"
import {GetStaticPaths, GetStaticProps} from "next"

import prisma, {Thing} from "datasources/prisma"

interface Props {
  thing: Thing
}

const getStaticPaths: GetStaticPaths = async () => {
  const things = await prisma.thing.findMany({select: {id: true}})
  const paths = things.map(thing => ({
    params: {id: thing.id.toString()}
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const id = parseInt(params?.id as string, 10)
  if (Number.isNaN(id)) {
    return {notFound: true}
  }

  const thing = await prisma.thing.findUnique({where: {id}})
  if (!thing) {
    return {notFound: true}
  }

  return {
    props: {thing},
    revalidate: 30
  }
}

const ThingsPage: FC<Props> = ({thing}) => {
  return (
    <div className="p-5">
      <h2>{thing.name}</h2>
    </div>
  )
}

export default ThingsPage
export {getStaticProps, getStaticPaths}
