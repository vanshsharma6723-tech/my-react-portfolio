import { useState } from "react";

function StudentForm() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: "",
        city: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setStudent({
            ...student,
            [name]: value
        });
    };

    return (
        <div>
            <h2>StudentForm Details</h2>
            <input type="text"
                name="name"
                placeholder="enter student name"
                value={student.name}
                onChange={handleChange}
            />
            <br /><br />

            <input type="email"
                name="email"
                placeholder="enter your email"
                value={student.email}
                onChange={handleChange}
            />

            <br /><br />
            <input type="number"
                name="age"
                placeholder="enter your age"
                value={student.age}
                onChange={handleChange}
            />
            <br /><br />


            <input type="city"
                name="city"
                placeholder="enter your city"
                value={student.city}
                onChange={handleChange}
            />
            <p>{error}</p>


            <h3>Student Name:{student.name}</h3>
            <h3>Student Email: {student.email}</h3>
            <h3>Student Age: {student.age}</h3>
            <h3>Student city: {student.city}</h3>
            {submitted && (
                <h3>Student Registered Successfully!</h3>
            )}


            <button onClick={() => {
                if (student.name.trim() === "") {
                    setError("Please enter your name!");
                    setSubmitted(false);
                }
                else if (student.email.trim() === "") {
                    setError("Please enter your email!");
                    setSubmitted(false);
                }
                else if (student.age.trim() === "") {
                    setError("Please enter your age!");
                    setSubmitted(false);
                }
                else if (student.city.trim() === "") {
                    setError("Please enter your city!");
                    setSubmitted(false);
                }
                else {
                    setError("");
                    setSubmitted(true);
                }
            }}>
                Submit
            </button>

            <button onClick={() => {
                setStudent({
                    name: "",
                    email: "",
                    age: "",
                    city: ""
                });
                setSubmitted(false);
                setError("");
            }
            }>
                Reset
            </button>


        </div>
    );
}

export default StudentForm;