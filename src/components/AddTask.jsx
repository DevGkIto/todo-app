import React, { useState } from "react";

import Button from "./Button";
import "../styles/AddTask.css";
import "../styles/Button.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  function handleAddButtonClick() {
    if (inputData !== "") {
      handleTaskAddition(inputData);
      setInputData("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputData}
        type="text"
        className="add-task-input"
      />
      <div className="add-button-container">
        <Button onClick={handleAddButtonClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
