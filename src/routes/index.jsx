import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthLayout from "../components/AuthLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discipline">
          <Route index element={<Create />} />
          <Route path="edit" element={<Edit />} />
        </Route>

        <Route element={<AuthLayout />} path="auth">
          <Route element={<SignIn />} path="signin" />
          <Route element={<SignUp />} path="signup" />
        </Route>
      </Route>
    </Routes>
  );
};
