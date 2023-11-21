import React, { useState } from "react";

const NavButton = ({ children }) => {
  let border = "";

  if (children === "Day") {
    border = "3px solid #E55C8A";
  }

  return (
    <button
      className="btn btn-link text-decoration-none text-white active"
      style={{
        fontWeight: "600",
        fontSize: "18px",
        borderBottom: border,
        borderRadius: "0",
      }}
    >
      {children}
    </button>
  );
};

export default NavButton;
