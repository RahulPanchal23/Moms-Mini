import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { aboutUs } from "../actions/actions";

function AboutUs({ handleaboutUs }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [aboutUs, setaboutUs] = useState(true);
  const [aboutUsData, setaboutUsData] = useState({
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
  const handleSubmit = () => {
    console.log(aboutUsData);
    axios
      .post("/aboutUs", {
        email: aboutUsData.email,
        password: aboutUsData.password,
      })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        dispatch(aboutUs());
        history.push("/");
      })
      .catch(e => alert(e));
  };
  const handleSignup = () => {
    if (SignupData.Cpassword !== SignupData.Password) {
      alert("Password Doesnt Match");
    }
    const FullName = SignupData.Fname + " " + SignupData.Lname;
    console.log(SignupData);
    axios
      .post("/signup", {
        name: FullName,
        email: SignupData.Email,
        password: SignupData.Password,
      })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        dispatch(aboutUs());
        history.push("/");
      })
      .catch(e => alert(e));
  };

  const handleaboutUsData = e => {
    const name = e.target.name;
    const value = e.target.value;
    setaboutUsData({ ...aboutUsData, [name]: value });
    console.log(aboutUsData);
  };

  const handleSignupData = e => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({ ...SignupData, [name]: value });
  };
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        <div className="aboutUsLeft">
          <div className="aboutUsForm">
            <h2>About Us</h2>
            <p>
              Moms & Mini is an apparel label. That will serve the needs of
              Mother-to-be. Our label will sell maternity wear for the wealthy,
              at a reasonable price.
              <br /> Our goal will be to serve the need of mother's-to-be
              through designer clothes that will make them feel Comfortable,
              Beautiful and <br />
              Confident. Moms&Mini will create fashionable, functional,
              <br /> yet comfortable maternity and nursing wear that is
              <br />
              designed to fit during and post-pregnancy and has
              <br /> concealed nursing access for easy breastfeeding.
            </p>
          </div>
        </div>
        <div className="aboutUsRight">
          <img src="aboutUs.png" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
