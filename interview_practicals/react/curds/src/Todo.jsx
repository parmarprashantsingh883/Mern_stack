import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (!task.trim()) return;

    setList([...list, task]);
    setTask("");
  }

  function deleteTask(index) {
    alert("sure want to delete it")
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  } 
  

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ol>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
