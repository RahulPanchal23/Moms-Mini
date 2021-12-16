import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logIn } from "../actions/actions";

function Login({ handleLogIn }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [SignupData, setSignupData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    Cpassword: "",
  });
  // const [Password, setPassword] = useState("");
  // const [REmail, setREmail] = useState("");
  // const [RPassword, setRPassword] = useState("");
  // const [Fname, setFname] = useState("");
  // const [Lname, setLname] = useState("");
  // const [Cpassword, setCpassword] = useState("");

  const handleSubmit = () => {
    console.log(LoginData);
    axios
      .post("/login", {
        email: LoginData.email,
        password: LoginData.password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        dispatch(logIn());
        history.push("/");
      })
      .catch((e) => alert(e));
  };
  const handleSignup = () => {
    if (SignupData.Cpassword !== SignupData.Password) {
      alert("Password Doesnt Match");
    }
    const FullName = SignupData.Fname + " " + SignupData.Lname;
    // console.log(FullName, SignupData.Email, RPassword, Cpassword);
    console.log(SignupData);
    axios
      .post("/signup", {
        name: FullName,
        email: SignupData.Email,
        password: SignupData.Password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        dispatch(logIn());
        history.push("/");
      })
      .catch((e) => alert(e));
  };

  const handleLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...LoginData, [name]: value });
    console.log(LoginData);
  };

  const handleSignupData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({ ...SignupData, [name]: value });
    // console.log(SignupData);
  };

  // const LoginUser = () => {
  //   return (
  //     <div className="loginForm">
  //       <h2>LOGIN</h2>
  //       <input
  //         type="email"
  //         // autoFocus="autofocus"
  //         className="input"
  //         placeholder="Email"
  //         name="email"
  //         defaultValue={LoginData.email}
  //         // value={LoginData.email}
  //         onChange={handleLoginData}
  //       ></input>
  //       <input
  //         type="password"
  //         // autoFocus="autofocus"
  //         className="input"
  //         // placeholder="Password"
  //         defaultValue={LoginData.password}
  //         // value={LoginData.password}
  //         onChange={handleLoginData}
  //       ></input>
  //       <input
  //         className="loginBtn"
  //         type="button"
  //         value="Submit"
  //         onClick={handleSubmit}
  //       ></input>
  //       <p>
  //         Don’t have an account?{" "}
  //         {/* <Link onClick={() => setLogin(false)}>Sign Up Now!</Link> */}
  //       </p>
  //     </div>
  //   );
  // };

  // const RegisterUser = () => {
  //   return (
  //     <div className="loginForm">
  //       <h2>Create Account</h2>
  //       <input
  //         type="text"
  //         autoFocus="autofocus"
  //         className="input"
  //         placeholder="First Name"
  //         defaultValue={Fname}
  //         onChange={(e) => setFname(e.target.value)}
  //       ></input>
  //       <input
  //         type="text"
  //         autoFocus="autofocus"
  //         className="input"
  //         placeholder="Last Name"
  //         defaultValue={Lname}
  //         onChange={(e) => setLname(e.target.value)}
  //       ></input>
  //       <input
  //         type="email"
  //         autoFocus="autofocus"
  //         className="input"
  //         placeholder="Email"
  //         defaultValue={REmail}
  //         onChange={(e) => setREmail(e.target.value)}
  //       ></input>
  //       <input
  //         type="password"
  //         autoFocus="autofocus"
  //         className="input"
  //         placeholder="Password"
  //         defaultValue={RPassword}
  //         onChange={(e) => setRPassword(e.target.value)}
  //       ></input>
  //       <input
  //         type="password"
  //         className="input"
  //         placeholder="Confirm Password"
  //         defaultValue={Cpassword}
  //         onChange={(e) => setCpassword(e.target.value)}
  //       ></input>
  //       <input
  //         className="loginBtn"
  //         type="button"
  //         value="Submit"
  //         onClick={handleSignup}
  //       ></input>
  //       <p>
  //         Already have an account?{" "}
  //         <Link onClick={() => setLogin(true)}>Sign In Now!</Link>
  //       </p>
  //     </div>
  //   );
  // };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          {login ? (
            <div className="loginForm">
              <h2>LOGIN</h2>
              <input
                type="email"
                // autoFocus="autofocus"
                className="input"
                placeholder="Email"
                name="email"
                defaultValue={LoginData.email}
                onChange={handleLoginData}
              ></input>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                defaultValue={LoginData.password}
                onChange={handleLoginData}
              ></input>
              <input
                className="loginBtn"
                type="button"
                value="Submit"
                onClick={handleSubmit}
              ></input>
              <p>
                Don’t have an account?{" "}
                <Link onClick={() => setLogin(false)}>Sign Up Now!</Link>
              </p>
            </div>
          ) : (
            <div className="loginForm">
              <h2>Create Account</h2>
              <input
                type="text"
                className="input"
                placeholder="First Name"
                name="Fname"
                defaultValue={SignupData.Fname}
                onChange={handleSignupData}
              ></input>
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                name="Lname"
                defaultValue={SignupData.Lname}
                onChange={handleSignupData}
              ></input>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="Email"
                defaultValue={SignupData.Email}
                onChange={handleSignupData}
              ></input>
              <input
                type="password"
                className="input"
                name="Password"
                placeholder="Password"
                defaultValue={SignupData.Password}
                onChange={handleSignupData}
              ></input>
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                name="Cpassword"
                defaultValue={SignupData.Cpassword}
                onChange={handleSignupData}
              ></input>
              <input
                className="loginBtn"
                type="button"
                value="Submit"
                onClick={handleSignup}
              ></input>
              <p>
                Already have an account?{" "}
                <Link onClick={() => setLogin(true)}>Sign In Now!</Link>
              </p>
            </div>
          )}
        </div>
        <div className="loginRight">
          <img src="loginImg.png" />
        </div>
      </div>
    </div>
  );
}

export default Login;
