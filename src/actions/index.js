import { AddTodo, ToggleTodo } from "../reducers/todos";

let nextTodoId = 0;
export const addTodo = text => new AddTodo(nextTodoId++, text);

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => new ToggleTodo(id);

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
