import {FC} from "react"

import ServerTime from "components/ServerTime"

const TimePage: FC = () => {
  return (
    <div className="p-5">
      <ServerTime />
    </div>
  )
}

export default TimePage
