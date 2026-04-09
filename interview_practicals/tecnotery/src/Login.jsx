import React, { useState } from "react";
import axios from "axios";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    const res = await axios.post(
      "https://reqres.in/api/login",
      {
        email: email,
        password: password
      }
    );

    localStorage.setItem("token", res.data.token);
    setIsLoggedIn(true);
  } catch (err) {
    alert("Login failed");
  }


 return (
  <div className="container">
    <h2>Login</h2>

    <input
      placeholder="Username"
      onChange={e => setUsername(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={e => setPassword(e.target.value)}
    />

    <button onClick={handleLogin}>Login</button>
  </div>
);

}

export default Login;
