import React from "react";
import { useState } from "react";
// Import style error
import "./style.css";
// Redux
import { useDispatch } from "react-redux";
import { login } from "./../../reducers/logUser";
import { setUserProfile } from "../../reducers/dataUser";
// Api
import axios from "axios";
//React router dom
import { useNavigate } from "react-router-dom";

const FormUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Affichage error
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");

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

      try {
        const responseUser = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "application/json",
            },
          }
        );

        const profileUser = responseUser.data.body;

        console.log("Data API:", profileUser);

        dispatch(setUserProfile(profileUser));
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Invalid email or password");
        } else if (error.response.status === 500) {
          setServerError("Internal Server Error");
        }
      } else {
        setServerError("Network Error");
      }
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
          autoComplete="on"
        />
      </div>

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && <p className="error-text">{error}</p>}
      {serverError && <p className="error-text">{serverError}</p>}
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default FormUser;
