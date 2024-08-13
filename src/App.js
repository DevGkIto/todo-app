import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Header from "./components/Header.jsx";
import TaskDetails from "./components/TaskDetails.jsx";

import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      tittle: "Estudar",
      completed: false,
    },
    {
      id: uuidv4(),
      tittle: "Ler livros",
      completed: false,
    },
  ]);

  function handleTaskAddition(TaskTittle) {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        tittle: TaskTittle,
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        console.log(task.id);
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTittle" element={<TaskDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
