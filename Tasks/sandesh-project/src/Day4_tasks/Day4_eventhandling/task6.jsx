function EventSix() {
  return (
    <div>
      <hr />
      <form>
        <legend>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="enter name" />
          <label htmlFor="semester">Semester:</label>
          <input type="text" placeholder="enter semester" />
          <br />
          <br />
          <button onClick={()=>alert("Form submitted successfully")} style={{borderRadius:"15px", padding:"6px",background:"skyblue"}}>Submit</button>
        </legend>
      </form>
    </div>
  )
}

export default EventSix