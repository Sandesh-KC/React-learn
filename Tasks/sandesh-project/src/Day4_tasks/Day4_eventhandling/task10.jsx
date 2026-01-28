function EventTen() {
  return (
    <div>
      <button onClick={(event)=>{
        console.log(event.target)
      }} >Click to log</button>
    </div>
  )
}

export default EventTen