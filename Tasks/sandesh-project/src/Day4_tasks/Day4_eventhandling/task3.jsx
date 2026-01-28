import { useState } from "react"

function EventThree() {
  const [text, nextText] = useState("")
  const inputTextInP = (
    (event)=>{
      nextText(event.target.value)
    }
  )

  return (
    <div>
      <hr />
      <input type="text" placeholder="Enter your text" onChange={inputTextInP} />
      <p>Your text: {text}</p>
    </div>
  )
}

export default EventThree