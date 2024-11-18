import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [submitted, setSubmitted] = useState(false);

    return(
        <div>
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
                <button onClick={() => setSubmitted(true)}>Submit</button>
            </>
            ): (
                <>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <button onClick={() => setSubmitted(false)}>Edit</button>
                </>
            )}
            
        </div>
    ) 
}

export default GeneralInfo;