interface AddTodo {
  type: "ADD_TODO";
  id: number;
  text: string;
}

interface ToggleTodo {
  type: "TOGGLE_TODO";
  id: number;
}

type Action = AddTodo | ToggleTodo;

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

const todos = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
