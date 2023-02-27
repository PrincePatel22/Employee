import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ setIsAdding }) {
  return (
    <header className="container">
      <h1>Employee Dashboard</h1>
      <div style={{ marginTop: "30px", marginBottom: "0px" }}>
        <button onClick={() => setIsAdding(true)} className="btn btn-primary">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
