import { useState } from "react";

function StudentsList() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");

    const addStudent = () => {
        if (name.trim() === "") return;

        setStudents([...students, name]);
        setName("");
    };

    return (
        <div>
            <h2>Students List</h2>

            <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <button onClick={addStudent}>Add Student</button>

            {students.map((student, index) => (
                <p key={index}>{student}</p>
            ))}

            {students.map((student, index) => (
                <p key={index}>
                    {student}
                    <button
                        onClick={() => {
                            setStudents(
                                students.filter((_, i) => i !== index)
                            );
                        }}
                    >
                        Delete
                    </button>
                </p>
            ))}


        </div>
    );
}

export default StudentsList;