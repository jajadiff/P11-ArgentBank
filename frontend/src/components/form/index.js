import React from "react";
import { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "./../../reducers/logUser";
// Api
import axios from "axios";
//React router dom
import { useNavigate } from "react-router-dom";

const FormUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Dispatch
  const dispatch = useDispatch();
  // Redirection
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        loginData
      );

      const token = response.data.body.token;

      //Supprimer ici a la fin du projet
      console.log("data api :", response.data);
      console.log("Token :", token);
      //

      dispatch(login({ token }));
      // Redirection Home
      navigate("/");
    } catch (error) {
      console.error("Error :", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default FormUser;
