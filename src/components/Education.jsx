import { useState } from "react";

function EducationInfo() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);

  return(
    <div className="education-info fill-form">
        <h2>Education </h2>
        {!submitted ? (
        <>
          <input 
          type="text" 
          placeholder="School Name" 
          value={school}
          onChange={(e) => {setSchool(e.target.value)}}
          />
          <input 
          type="text" 
          placeholder="Title of study" 
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          />
          <input 
          type="date" 
          placeholder="Date of Study"
          value={date}
          onChange={(e) => {setDate(e.target.value)}}
          />
          <button className="submit" onClick={() => setSubmitted(true)}>Submit</button>
        </>
        ): (
          <>
          <p>{school}</p>
          <p>{title}</p>
          <p>{date}</p>
          <button className="edit" onClick={() => setSubmitted(false)}>Edit</button>
          </>
        )}
        
    </div>
) 
  }
  
export default EducationInfo;

