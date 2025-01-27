import TaskTextTime from "../Elements/TaskTime";
import TaskText from "../Elements/TaskText";
import { useState } from "react";

import InputTask from "../Elements/InputTask";
import ContainerTodo from "../Elements/CointainerTodo";

const MainHome = ({ children }) => {
  const [taskId, setTaskId] = useState(0);
  const [completed , setCompleted] = useState(0);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);



  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      setTodo([
        {
          id: taskId,
          task: text,
          date : new Date().toLocaleString()
        },...todo,
      ]);

      setTaskId(taskId + 1);
      setText("");
    }
  };

  console.log(todo);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleDeleteTask = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id != id));
    setTaskId(taskId - 1)
    setCompleted(completed + 1)
  }

  return (
    <>
      <main className="flex-1 p-8 space-y-6">
        {children}

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
          <div className="p-6">
            <div className="flex justify-around">
              <TaskText task={taskId} text="Tasks to be Completed" />
              <TaskText task={completed} text="Tasks Completed" />
            </div>
          </div>
        </div>

        <InputTask
          text={text}
          inputChange={handleInputChange}
          keyPress={handleKeyPress}
        />

        <ContainerTodo todo={todo} handleDelete={handleDeleteTask}/>
      </main>
    </>
  );
};

export default MainHome;
