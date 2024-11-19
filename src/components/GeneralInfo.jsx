import { useState } from "react";
import '../styles/GeneralInfo.css'

function GeneralInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [submitted, setSubmitted] = useState(false);

    return(
        <div className="general-info fill-form">
            <h2>General Info </h2>
            {!submitted ? (
                <>
                <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="tel" 
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button className="submit" onClick={() => setSubmitted(true)}>Submit</button>
            </>
            ): (
                <>
                <p className="info-name"><strong>Name:</strong> {name}</p>
                <p className="info-email"><strong>Email:</strong> {email}</p>
                <p className="info-phone"><strong>Phone:</strong> {phone}</p>
                <button className="edit" onClick={() => setSubmitted(false)}>Edit</button>
                </>
            )}
            
        </div>
    ) 
}

export default GeneralInfo;