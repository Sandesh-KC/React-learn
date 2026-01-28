function TaskThree() {
  const num = Math.random()
  return (
    <div>
      {num>0.5 ? (
        <h1>Heads</h1>
      ) : (
        <h1>Tails</h1>
      )}
    </div>
  )
}

export default TaskThree