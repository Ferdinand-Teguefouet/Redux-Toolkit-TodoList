import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  // Les interactions à appliquer sur notre state
  reducers: {
    addTask: (state, action) => {
      //{type: "todo/assTask", payload: "Aller faire les courses"}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // {type: "todo/toggleTask", payload:2}
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      //{type: "todo/deleteTask", payload: 2}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});
// action creators
export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
// véritable entrepot Redux
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// action creator
// toutes ces fonctions existent déjà dans redux
// pas besoin de les créer à nouveau
/*export const toggleTask = (id) => {
  return {
    type: "todo/toggleTask",
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: "todo/deleteTask",
    payload: id,
  };
};

export const addTask = (text) => {
  return {
    type: "todo/addTask",
    payload: text,
  };
};*/
