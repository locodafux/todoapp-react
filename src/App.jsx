import React from "react";
import Card from "./components/Card";

const App = () => {
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };

  return (
    <div
      className="d-flex"
      style={{
        backgroundColor: "#09121b",
        width: "100vw",
        height: "100dvh",
      }}
    >
      <Card function={pull_data} />
    </div>
  );
};

export default App;
