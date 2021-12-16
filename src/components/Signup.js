import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  let history = useHistory();
  const [Email, setEmail] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const handleSignup = () => {
    if (Password !== Cpassword) {
      alert("Wrong Password");
    }
    const FullName = Fname + " " + Lname;
    console.log(FullName);
    axios
      .post("/signup", {
        name: FullName,
        email: Email,
        password: Password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        history.push("/");
      });
  };

  return (
    <div>
      <div className="registerForm">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
