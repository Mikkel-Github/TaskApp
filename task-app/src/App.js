import React from 'react';
import './App.css';
import './StyleSheet.css';

import { FaCheck } from 'react-icons/fa';

function addTask() {
    const masterContainer = document.getElementById("task-container");
    const taskInput = document.getElementById("taskInput");

    // Check if the input is empty or whitespace
    if (!taskInput.value.trim().length) {
        return
    }

    const taskContainer = document.createElement("div");
    const taskHolder = document.createElement("div");
    const taskName = document.createElement("p");
    const taskBtn = document.createElement("button");

    taskName.innerHTML = taskInput.value;
    taskBtn.innerHTML = "Completed";

    taskHolder.className = "task-holder";

    taskBtn.addEventListener("click", function () {
        masterContainer.removeChild(taskContainer);

        if (masterContainer.childElementCount == 0) {
            document.getElementById("taskTitle").style.display = "none";
        }
    });

    taskHolder.appendChild(taskName);
    taskHolder.appendChild(taskBtn);
    taskContainer.appendChild(taskHolder);

    masterContainer.appendChild(taskContainer);

    taskInput.value = "";

    document.getElementById("taskTitle").style.display = "block";
}

function App() {
  return (
      <div className="App">
          <header className="app-container">
              <div className="header-div">
                  <div className="header-space-div">
                      <h1>TaskManager</h1>
                  </div>
              </div>
              

              <h2>Create Task</h2>
              <div className="input-container">
                  <input type="text" id="taskInput"></input>
                  <button onClick={addTask}>Add</button>
              </div>

              <h2 id="taskTitle">Task</h2>
              <div className="task-container" id="task-container">
              </div>
          </header>
    </div>
  );
}

export default App;
