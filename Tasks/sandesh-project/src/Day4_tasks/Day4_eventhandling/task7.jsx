import { useState } from "react"

function Message({messageText}) {
  return (
    <div>
      <p>{messageText}</p>
    </div>
  )
}

function EventSeven() {
  const [message, setMessage] = useState("")

  return (
    <div>
      <hr />
      <button onClick={() => setMessage("This is first message")} >Message One</button>
      <button onClick={() => setMessage("This is second message")} >Message Two</button>
      {message && <Message messageText={message} />}
    </div>
  )
}

export default EventSeven