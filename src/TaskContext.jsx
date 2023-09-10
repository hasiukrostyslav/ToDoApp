import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'task/create':
      return [
        { task: action.payload, id: Math.random(), isDone: false },
        ...state,
      ];

    case 'task/change':
      return state.map((task) =>
        task.id !== action.payload ? task : { ...task, isDone: !task.isDone }
      );

    case 'task/delete':
      return state.filter((task) => task.id !== action.payload);

    default:
      throw new Error('Unknown action type');
  }
}

function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function createTask(inputValue) {
    if (!inputValue) return;
    dispatch({ type: 'task/create', payload: inputValue });
  }

  function changeStatus(id) {
    dispatch({ type: 'task/change', payload: id });
  }

  function deleteTask(id) {
    if (!id) return;
    dispatch({ type: 'task/delete', payload: id });
  }

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, changeStatus, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);

  if (context === undefined)
    throw new Error('TaskContext was used outside of TaskContextProvider');

  return context;
}

export { TaskContextProvider, useTask };
