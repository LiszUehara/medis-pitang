import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Create from "../pages/Create";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Lista</>} />
        <Route path="discipline" element={<Create/>} />
      </Route>
    </Routes>
  );
};