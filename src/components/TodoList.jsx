import React from "react";
import SingleTask from "./SingleTask";

const TodoList = ({ tasks }) => {
  return (
    <>
      <style jsx="true">{``}</style>
      <ul className="task-list">
        {tasks && tasks.map((task) => <SingleTask key={task.id} task={task} />)}
      </ul>
    </>
  );
};

export default TodoList;
