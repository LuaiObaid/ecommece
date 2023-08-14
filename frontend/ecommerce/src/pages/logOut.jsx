import React from "react";

const LogoutPage = ({ onLogout }) => {
  return (
    <div className="logout-page">
      <button className="logout" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
