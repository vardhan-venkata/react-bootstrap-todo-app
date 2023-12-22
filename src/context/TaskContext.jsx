import React, { createContext, useContext, useReducer } from "react";

export const TaskLayerContext = createContext();

export const TaskLayer = ({ initialState, reducer, children }) => (
  <TaskLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TaskLayerContext.Provider>
);

export const useTaskLayerValue = () => useContext(TaskLayerContext);
