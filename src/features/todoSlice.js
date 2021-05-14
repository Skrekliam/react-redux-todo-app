import { createSlice } from "@reduxjs/toolkit";

// cpnst [todoList, setTodoList] = useState([])

const initialState = {
  todoList: [
    {
      item: "Say hello to a new visitor",
      done: false,
      id: 1436587432,
    },
    {
      item: "Publish to Github",
      done: true,
      id: 1436587686,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList = (state) => state.todo.todoList;

export default todoSlice.reducer;
