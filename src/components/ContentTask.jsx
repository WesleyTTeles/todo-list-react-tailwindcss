import React from "react";

import { IoCloseCircleOutline } from "react-icons/io5";

const ContentTask = ({ tasks, deleteTask, taskDone }) => {
  return (
    tasks.length > 0 && (
      <div className="w-full flex justify-center">
        <div className="bg-zinc-300 p-2 m-2 rounded-lg w-[470px]">
          <ul className="flex flex-col items-center ">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`bg-white w-full flex justify-between items-center p-2 m-2 rounded-lg ${
                  task.isDone ? "line-through" : ""
                }`}
              >
                <span
                  className="w-full cursor-pointer"
                  onClick={() => taskDone(task.id)}
                >
                  {task.taskName}
                </span>
                <IoCloseCircleOutline
                  size={22}
                  onClick={() => deleteTask(task.id)}
                  className="cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ContentTask;
