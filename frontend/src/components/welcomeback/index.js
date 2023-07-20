import React from "react";
// Redux
import { useSelector } from "react-redux";

const Welcomeback = () => {
  const data = useSelector((state) => state.user);
  console.log(data.firstName, data.lastName);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {data.firstName} {data.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Welcomeback;
