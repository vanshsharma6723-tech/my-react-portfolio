// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Student from "./Student";
// import Counter from "./Counter";
// import NameApp from "./NameApp";
// import ButtonApp from "./ButtonApp";
// import Fruits from "./Fruits";
// import StudentForm from "./StudentForm";
// import StudentList from "./StudentList";

// function App() {
//   const fruits = ["Apple", "Banana", "Cherry"];

//   return (
//     <>
//       <div>
//         <Fruits list={fruits} />
//       </div>
//       <div>
//         <Navbar />
//         <h1>Welcome to My Website</h1>
//         <Student name="Vansh" age={19} Collage="SGRRU" />
//         <Student name="Ananya" age={20} Collage="SGRRU" />
//         <Student name="Mohit" age={21} Collage="SGRRU" />
//         <p>I am learning React from scratch.</p>
//         <p>I want to become a React Developer.</p>
//       </div>
//       <NameApp />
//       <Counter />
//       <ButtonApp />
//       <StudentForm />
//       <StudentList />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Current count:", count);
//     }, [count]);

//     return (
//         <div>
//             <h1>Count: {count}</h1>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             console.log("Timer running...");
//         }, 1000);

//         return () => {
//             clearInterval(timer);
//             console.log("Timer stopped");
//         };
//     }, []);

//     return (
//         <div>
//             <h1>Count: {count}</h1>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// export default App;


// import { useState, useEffect } from "react";

// function App() {

//     const [users, setUsers] = useState([]);

//     useEffect(() => {

//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => {
//                 setUsers(data);
//             });

//     }, []);

//     return (
//         <div>
//             <h1>Users List</h1>

//             {users.map((user) => (
//                 <h3 key={user.id}>{user.name}</h3>
//             ))}
//         </div>
//     );
// }

// export default App;



// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Something went wrong!");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>Users List</h1>

//       {users.map((user) => (
//         <h3 key={user.id}>{user.name}</h3>
//       ))}
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // GET: Fetch users
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // POST: Add new user
    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage("");
        setSubmitting(true);

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add user");
                }

                return response.json();
            })
            .then((data) => {
                setUsers((previousUsers) => [...previousUsers, data]);
                setName("");
                setEmail("");
                setMessage("User added successfully!");
            })
            .catch(() => {
                setMessage("Unable to add user. Please try again.");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    // PATCH: Edit existing user
    const handleEdit = (id) => {
        const newName = prompt("Enter your new name:");

        if (newName === null || newName.trim() === "") {
            return;
        }

        setMessage("");

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newName.trim()
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update user");
                }

                return response.json();
            })
            .then((data) => {
                setUsers((previousUsers) =>
                    previousUsers.map((user) =>
                        user.id === id
                            ? { ...user, name: data.name }
                            : user
                    )
                );

                setMessage("User updated successfully!");
            })
            .catch(() => {
                setMessage("Unable to update user. Please try again.");
            });
    };

    //delete existing users

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "are you sure, you want to delete this users?"
        );
        if(!confirmDelete) {
            return;
        }

        setMessage("");

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method : "DELETE"
        })

        .then((response) => {
            if(!response.ok) {
                throw new error ("failed to delete this user");
            }

            setUsers((previousUsers) =>
                previousUsers.filter((user) => user.id !==id)
            );

            setMessage("user deleted succesfully1");
        })
        .catch(() =>{
            setMessage("unable to delete user, please try again later");
        });
    };



    // Loading and error handling
    if (loading) {
        return <h2>Loading users...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Add New User</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <br />
                <br />

                <button type="submit" disabled={submitting}>
                    {submitting ? "Adding..." : "Add User"}
                </button>
            </form>

            {message && <p>{message}</p>}

            <h1>Users List</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>

                    <button onClick={() => handleEdit(user.id)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(user.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;





