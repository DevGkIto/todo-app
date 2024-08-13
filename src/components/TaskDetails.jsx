import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";
import "../styles/TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  function handleReturnClick() {
    navigate(-1);
  }
  return (
    <>
      <div className="return-button-container">
        <Button onClick={handleReturnClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTittle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa
          maxime dolore iusto sapiente aperiam fuga omnis vitae dicta dolores
          dignissimos consequuntur impedit reiciendis, ipsam nam deserunt
          aspernatur quo natus!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
