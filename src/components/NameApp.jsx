import { useState } from "react";

function NameApp(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return(
        <div>
            <h2>Student Details</h2>
                <input type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(event)=> setName(event.target.value)}
                />
                <br/> <br/>
                <input type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(event)=> setAge(event.target.value)}
                 />
                <h2>Hello {name}</h2>
                <h3>your age is {age}</h3>
        </div>
    );
}

export default NameApp;