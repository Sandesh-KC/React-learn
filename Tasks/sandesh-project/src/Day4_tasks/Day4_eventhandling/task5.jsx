import { useState } from "react"

function EventFive() {
  const [clicked, nextStyle] = useState(false)
  return (
    <div>
      <hr />
      <button onClick={() => nextStyle(true)} style={{padding:"8px", backgroundColor: clicked ? "black" : "white", color: clicked ? "white" : "black"}} >Change color</button>
    </div>
  )
}

export default EventFive