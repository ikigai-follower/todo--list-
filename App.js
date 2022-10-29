
import './App.css';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  const [value, setValue] = useState("");
  
  const addTask = text =>updateTask([...tasks,{text,isCompleted:false}]);

  const [tasks, updateTask] = useState([
    {
      text: "wake up",
      isCompleted: false,
    },
    {
      text: "brush your teeth",
      isCompleted: false,
    },
    {
      text: "learn react js",
      isCompleted: false,
    },


  ]);
  const toogleTask = (index) => {
    const newTask = [...tasks];
    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;

    }
    else {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);
  }
  const remove = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    updateTask(newTask);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addTask(value);
      {console.log(addTask(value));}
      {console.log(value);}
      setValue("");
    }
  };
  return (
<div>
  <h1><em>TO-DO list</em></h1>
    <div className="App">

      {tasks.map((task, index) => (
        <div className='task-status'>
          <span onClick={() => toogleTask(index)} className={task.isCompleted ? "task-name completed-task" : "task-name"}>
            {/* {index} */}
            {/* {console.log(task.isCompleted )}
              {console.log(".......")} */}
            {task.text}

          </span>
          <button><DeleteIcon onClick={() => remove(index)} /></button>


        </div>
      ))}
      <div className='task-status1'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="add here" onChange={e => setValue(e.target.value)} style={{width:"400px",height:"50px"}}/>
       <button type="submit" ><AddIcon/></button>
      </form></div>
    </div>
</div>
  );
}

export default App;
