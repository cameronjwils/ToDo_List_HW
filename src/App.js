import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: 'Buy Shopping', priorty: 'high'},
    {name: 'Hoover House', priorty: 'low'},
    {name: 'Empty Dishwasher', priorty: 'low'},
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <li
        key={index} className={task.priorty ? "high":'low' }>
        <span>
          {task.name}
        </span>
      </li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask})
    setTasks(copyTasks)
    setNewTask('')
  }

  return (
    <div className="App">

    <h1>ToDo List</h1>
        <hr></hr>

    <form onSubmit={saveNewTask}>
            <label htmlFor='new-task'>Add a new Task:</label>
            <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
            <input type='submit' value='Save New Task' />
          </form>

    <ul>
      {taskNodes}
    </ul>

    </div>
  );
}

export default App;
