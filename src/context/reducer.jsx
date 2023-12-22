export const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, content: action.payload.newValue }
            : task
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
