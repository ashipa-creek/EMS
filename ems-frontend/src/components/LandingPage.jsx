import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="gaming-container">
      <h1 className="game-title">EMPLOYEE MANAGEMENT SYSTEM</h1>

      <p className="game-subtitle">Control. Manage. Dominate your workforce.</p>

      <p className="game-description">
        Add, update, and track employees in real-time with a sleek interface.
      </p>

      <button className="game-button" onClick={() => navigate("/employees")}>
        ENTER SYSTEM →
      </button>

      <p className="developer-tag">
        Built by <span>Pawan Kumar</span>
      </p>
    </div>
  );
};

export default LandingPage;
