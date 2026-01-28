import { useState } from "react"

function EventNine() {
  const [hover,hoverState] = useState(false)

  const updateAfterMouseEnter = ()=>{
    {hover ? hoverState(false) : hoverState(true)}
  }
  
  return (
    <div>
      <p onMouseEnter={updateAfterMouseEnter}>
        {hover ? "Hello Connor" : "Hover to see secret message"}
      </p>
    </div>
  )
}

export default EventNine