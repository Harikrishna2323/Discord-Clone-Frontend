import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
            
          <Route exact path="/register" element={<RegisterPage />} />
           
          <Route exact path="/" element={<Dashboard />} />
            
          
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
