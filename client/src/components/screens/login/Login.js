import React, { useState } from "react";
import axios from "axios";
import {useNavigate}from "react-router-dom";
import './login.css'




function Login({}) {
 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const login = () => {
    const data = { email: username, password: password };
    axios
      .post("http://localhost:5001/user/login", data)
      .then((response) => {
        console.log(response.data);
        setLoading(true);
        navigate("/community");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="shad">
        <br />
      </div>
      <div className="login">
        {" "}
        <label>Username:</label> <div></div>
        <br />
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />{" "}
        
        <label>Password:</label> <div></div>
        <br />
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <div></div>
        <br />
        <button onClick={login}> Login </button>{" "}
      </div>
    </>
  );
}
export default Login;
