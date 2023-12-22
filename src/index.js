import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskLayer } from "./context/TaskContext";
import reducer, { initialState } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskLayer initialState={initialState} reducer={reducer}>
      <App />
    </TaskLayer>
  </React.StrictMode>
);
