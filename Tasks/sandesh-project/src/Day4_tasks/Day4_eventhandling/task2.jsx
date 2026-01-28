import { useState } from "react"

function EventTwo() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)} >Increase count</button>
      <button onClick={()=>setCount(count-1)} >Decrease count </button>
    </div>
  )
}

export default EventTwo