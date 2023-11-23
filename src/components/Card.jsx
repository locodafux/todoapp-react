import React, { useState, useRef, useEffect } from "react";
import "../index.css";
import Task from "./Task";
import { useLocalStorage } from "./useLocalStrorage";

const Card = ({ tasks }) => {
  const ref = useRef(null);

  const inputStyle = {
    backgroundColor: "#343A40",
    border: "none",
    color: "white ",
    paddingLeft: "10px",
  };

  const { setItem } = useLocalStorage("value");

  const [text, setText] = useState("");
  const [items, setItems] = useState(["sasd"]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("value"));
    if (items) {
      setItems(items);
    }
  }, []);

  const addItem = () => {
    if (text === "") {
      alert("please enter something");
      ref.current.focus();
      return;
    }

    const newArray = [...items, text];
    setItems(newArray);
    setItem(newArray);
    setText("");

    ref.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const deleteItem = (i) => {
    var array = [...items];
    if (i !== -1) {
      array.splice(i, 1);
      setItem(array);

      setItems(array);
      ref.current?.focus();
    }
  };

  const updateItem = (index) => {
    if (text === "") {
      alert("please enter something");
      return;
    }

    const updatedArray = items;
    updatedArray[index] = text;
    setItems(updatedArray);
    setItem(items);
    setText("");
    ref.current.focus();
  };
  const date = new Date();
  const formattedDate = date.toDateString();

  return (
    <>
      <div
        className="card text-white pb-3"
        style={{
          backgroundColor: "#3C424A",

          minWidth: "450px",

          margin: "auto",
        }}
      >
        <div className="card-body p-0 text-center">
          <h3 className="font-weight-bold mt-3">Todo List App</h3>
          <span className="text-secondary fw-bolder mb-3">{formattedDate}</span>

          <div
            className="d-flex justify-content-center mt-5"
            style={{ height: "fit-content" }}
          >
            <input
              ref={ref}
              type="text"
              value={text}
              className="form-control w-50   mb-5"
              id="taskInput"
              placeholder="Task..."
              style={inputStyle}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
            ></input>
            <button
              className="btn btn-primary w-25 ms-2"
              style={{ height: "fit-content" }}
              onClick={() => addItem()}
            >
              Add
            </button>
          </div>
          {items.map((item, index) => (
            <Task key={item}>
              {item}

              <button
                className="btn btn-link text-success text-decoration-none"
                style={{
                  fontSize: "16px",
                  position: "absolute",
                  right: "55px",
                  bottom: "10px",
                }}
                onClick={() => updateItem(index)}
              >
                Update
              </button>
              <button
                className="btn btn-link text-danger text-decoration-none"
                style={{
                  fontSize: "16px",
                  position: "absolute",
                  right: "0px",
                  bottom: "10px",
                }}
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </Task>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
