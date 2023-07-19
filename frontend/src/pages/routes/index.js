import { Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "../Index";
import Sign from "../Sign";
import User from "../User";

// Check si token = true
const isLogIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Redirection
const PrivateRoute = ({ element }) => {
  return isLogIn() ? element : <Navigate to="/sign" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/user" element={<PrivateRoute element={<User />} />} />
    </Routes>
  );
};

export default Router;
