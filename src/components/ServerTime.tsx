import {useQuery} from "datasources/trpc"
import {FC} from "react"

const ServerTime: FC = () => {
  const {data, error, isLoading} = useQuery(["serverTime"])
  const time = data && new Date(data)

  if (isLoading || !time) {
    return <span>loading...</span>
  }

  if (error) {
    return <span>error</span>
  }

  return (
    <div>
      <h2>Server time: {time.toString()}</h2>
    </div>
  )
}

export default ServerTime
