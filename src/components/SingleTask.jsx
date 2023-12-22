import React, { useState } from "react";
import { useTaskLayerValue } from "../context/TaskContext";
import { Col, Row } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { HiOutlineTrash, HiCheck } from "react-icons/hi";

const SingleTask = ({ task }) => {
  const [, dispatch] = useTaskLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(task.content);

  const removeTodo = (taskId) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: taskId,
    });
  };
  const completeTodo = (taskId) => {
    dispatch({
      type: "COMPLETE_TASK",
      payload: taskId,
    });
  };
  const updateTodo = ({ taskId, newValue }) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        taskId,
        newValue,
      },
    });
    setEditable(false);
  };

  return (
    <li className="task-list-item mt-2 px-1">
      <Row className="w-100 justify-content-between m-0">
        <Col className="task p-1" xs={12}>
          <input
            className="checkbox"
            checked={task.isCompleted ? "checked" : ""}
            type="checkbox"
          />
          {editable ? (
            <input
              type="text"
              value={content}
              autoFocus
              onKeyUp={(e) =>
                e.key === "Enter"
                  ? updateTodo({
                      taskId: task.id,
                      newValue: content,
                    })
                  : ""
              }
              onChange={(event) => setContent(event.target.value)}
            />
          ) : (
            <span
              onClick={() => (editable ? "" : completeTodo(task.id))}
              className={task.isCompleted ? "task-name complated" : "task-name"}
            >
              {task.content}
            </span>
          )}
          <div className="buttons">
            {editable ? (
              <span>
                {
                  <HiCheck
                    className="check-btn"
                    onClick={() => {
                      updateTodo({
                        taskId: task.id,
                        newValue: content,
                      });
                    }}
                  />
                }
              </span>
            ) : (
              <>
                {!task.isCompleted ? (
                  <span className="edit-btn" onClick={() => setEditable(true)}>
                    {<BiEdit />}
                  </span>
                ) : null}
                <span
                  className="delete-btn"
                  onClick={() => removeTodo(task.id)}
                >
                  {<HiOutlineTrash />}
                </span>
              </>
            )}
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default SingleTask;
