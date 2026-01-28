import { useState } from "react"

function EventFour() {
  const [messageShown, messageFunction] = useState(false)
  const toggleMessage = (
    ()=> {
      {!messageShown ? messageFunction(true) : messageFunction(false)}
    }
  )
  return (
    <div>
      <h3>
        {messageShown ? "This message can be toggled." : ""}
      </h3>
      <button onClick={toggleMessage} >Toggle Message</button>
    </div>
  )
}

export default EventFour