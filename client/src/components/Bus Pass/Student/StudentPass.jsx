import React from 'react'

const StudentPass = () => {
  return (
    <div style={{marginTop:"80px"}}>Student Pass
    <div>
    <form>
        <div style={{marginBottom:"10px"}}>
      <label>First Name:
        <input type="text" />
      </label>
      <br></br>
      </div>
      <label>Last Name:
        <input type="text" />
      </label>
      <br></br>
      <label>Gender:
        <input type="text" />
      </label>
      <br></br>
      <label>Age:
        <input type="text" />
      </label>
      <br></br>
      <label>College Name:
        <input type="text" />
      </label>
      <br></br>
      <label>Area Of Study:
        <input type="text" />
      </label>
      <br></br>
      <button>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default StudentPass