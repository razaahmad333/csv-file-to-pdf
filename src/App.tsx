import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateAccount from "./pages/CreateAccount";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>{" "}
    </div>
  );
}

export default App;
