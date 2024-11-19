import { useState } from "react";

function ExperienceInfo() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [start, setStart] = useState("");
  const [end, SetEnd] = useState("");

  const [submitted, setSubmitted] = useState(false)
  return(
    <div className="practical-experience fill-form">
      <h2>Practical Experience </h2>
      {!submitted ? (
        <>
        <input 
        type="text" 
        placeholder="company name," 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input 
        type="text" 
        placeholder="Position" 
        value={position}
        onChange={(e) => {setPosition(e.target.value)}}
        />
        <input 
        type="textarea" 
        placeholder="Responsibilities"
        value={responsibility}
        onChange={(e) => {setResponsibility(e.target.value)}}
        />
        <input 
        type="date" 
        placeholder="Start Date" 
        value={start}
        onChange={(e) => {setStart(e.target.value)}}
        />
        <input 
        type="date" 
        placeholder="End Date"
        value={end}
        onChange={(e) => {SetEnd(e.target.value)}}
        />
        <button className="submit" onClick={() => setSubmitted(true)}>Submit</button>
        </>
      ): (
        <>
        <p>{name}</p>
        <p>{position}</p>
        <p>{responsibility}</p>
        <p>{start}</p>
        <p>{end}</p>
        <button className="edit" onClick={() => setSubmitted(false)}>Edit</button>
        </>
      )}
        
        
    </div>
) 
  }

export default ExperienceInfo;
  