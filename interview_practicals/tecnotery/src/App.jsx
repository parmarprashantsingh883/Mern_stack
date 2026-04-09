import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");

  // ---------- LOGIN ----------
  const login = async () => {
    try {
      const res = await axios.post("/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      alert("Login success");
      fetchStudents();
    } catch {
      alert("Login failed");
    }
  };

  // ---------- FETCH STUDENTS ----------
  const fetchStudents = async () => {
    try {
      const res = await axios.get("/students", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setStudents(res.data);
    } catch {
      alert("Fetch failed");
    }
  };

  useEffect(() => {
    if (token) fetchStudents();
  }, []);

  // ---------- ADD STUDENT ----------
  const addStudent = async () => {
    await axios.post(
      "/students",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setName("");
    fetchStudents();
  };

  // ---------- DELETE STUDENT ----------
  const deleteStudent = async (id) => {
    await axios.delete(`/students/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchStudents();
  };

  // ---------- UI ----------
  if (!token)
    return (
      <div style={{ padding: 40 }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button onClick={login}>Login</button>
      </div>
    );

  return (
    <div style={{ padding: 40 }}>
      <h2>Students</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
