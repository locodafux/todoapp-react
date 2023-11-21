import React from "react";

const Task = ({ children }) => {
  return (
    <div
      className=" form-check d-flex mx-auto text-left "
      style={{
        position: "relative",
        width: "75%",
        height: "40px",
      }}
    >
      {/* <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        style={{
          backgroundColor: "#484F59",
          border: "1px solid black",
          Left: "10px",
        }}
      /> */}

      <span className="" style={{ fontSize: "16px" }}>
        {children}
      </span>
    </div>
  );
};

export default Task;
