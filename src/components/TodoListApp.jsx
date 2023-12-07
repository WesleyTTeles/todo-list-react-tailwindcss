import { useState } from "react";

import InputField from "./InputField";
import ContentTask from "./ContentTask";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    if (value.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, taskName: value }]);
      setValue("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-2xl p-4">Lista de Tarefas</h1>
      <InputField
        value={value}
        handleInputChange={(e) => setValue(e.target.value)}
        handleAddTask={handleAddTask}
      />
      <ContentTask tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
}

export default TodoListApp;
