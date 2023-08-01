import React, { useState } from "react";
import "./style.css";
// //API
import axios from "axios";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setUserEdit } from "../../reducers/dataUser";

const Welcomeback = () => {
  // Open Edit Name
  const data = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(data.userName);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.log.token);
  // console.log("token verif:", token);
  // console.log("Type of token:", typeof token);
  // console.log("Token:", token);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  ///

  function toggleClose() {
    setIsOpen(false);
  }

  const handleCancel = () => {
    toggleClose();
    
  };

  // const token = useSelector((state) => state.log.token);

  // console.log(token);

  // console.log(data.firstName, "=", data.lastName, "=", data.userName);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          userName: userName,
        },
        {
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      const responseData = response.data;
      // console.log("responsedata", responseData);
      console.log("Username update");
      dispatch(setUserEdit({ userName }));
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {data.firstName} {data.lastName}
      </h1>
      <button className="edit-button" onClick={toggleOpen}>
        Edit Name
      </button>
      {isOpen && (
        <div className="display-flex">
          <div className="input-wrapper-welcomeback">
            <label>User Name: </label>
            <input value={userName} onChange={handleUserNameChange} />
          </div>
          <div className="input-wrapper-welcomeback">
            <label>First Name: </label>
            <input value={data.firstName} readOnly className="readonly" />
            {/* <span className="data-item">{data.firstName}</span> */}
          </div>
          <div className="input-wrapper-welcomeback ">
            <label>Last Name:</label>
            <input value={data.lastName} readOnly className="readonly" />
            {/* <span className="data-item">{data.lastName}</span> */}
          </div>
          <button
            className="edit-button edit-button-margin-right"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcomeback;
