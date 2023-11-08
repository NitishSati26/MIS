import React, { useMemo } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "Scenes/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "Scenes/signup/SignUp";
import Login from "Scenes/login/Login";
import Dashboard from "Scenes/dashboard/Dashboard";

function App() {
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
