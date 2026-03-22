import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="logo" onClick={() => navigate("/")}>
        EMS SYSTEM
      </div>

      <div className="nav-links">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/employees")}>Employees</span>
      </div>
    </header>
  );
};

export default HeaderComponent;
