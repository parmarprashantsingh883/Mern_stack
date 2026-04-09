import React, { useEffect, useState } from "react";
import axios from "axios";

function Data({ setIsLoggedIn }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("API_DATA_URL", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setData(res.data);
      })
      .catch(() => alert("Error fetching data"))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (loading) return <h3>Loading...</h3>;

  return (
  <div className="container">
    <div className="header">
      <h2>User Data</h2>
      <button onClick={logout}>Logout</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}

export default Data;
