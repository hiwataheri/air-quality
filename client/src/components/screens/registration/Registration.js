import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function handleChange(e) {
    //read changes of input fields
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    //request to backend
    axios({
      url: "http://localhost:5001/user",
      method: "POST",
      data: user,
      
    })
      .then((res) => {
        console.log(res);
        navigate("/community");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Register">
      <form onChange={handleChange} onSubmit={submitHandler}>
        <div className="container" />
        <center>
          {" "}
          <h1>Customer Registration Form</h1>{" "}
        </center>
        <hr />
        <label htmlFor="psw">
          <b> Firstname</b>{" "}
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          size="15"
          required
        />
        <label htmlFor="psw">
          <b> Lastname</b>{" "}
        </label>
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          size="15"
          required
        />
        <label htmlFor="psw">
          <b>email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="15"
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="Password"
          required
        />
        <div></div>
        <label> Gender </label>
        <br />
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <div />
        <div>
          <label htmlFor="img">Select image:</label>
          <input type="file" id="img" name="pic" accept="image/*" />
        </div>
        <div></div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Registration;
