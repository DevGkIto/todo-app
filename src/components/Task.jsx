import React from "react";
import { useNavigate } from "react-router-dom";

import { CgClose, CgInfo } from "react-icons/cg";
import "../styles/Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  function handleTaskDetailsClick() {
    navigate(`${task.tittle}`);
  }
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-tittle" onClick={() => handleTaskClick(task.id)}>
        {task.tittle}
      </div>
      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => {
            handleTaskDeletion(task.id);
          }}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
