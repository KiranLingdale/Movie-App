import "./App.css";
import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="page-container bg-dark text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
