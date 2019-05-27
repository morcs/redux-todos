type State = Todo[];

interface Action {
  update: (s: State) => State;
}

export class AddTodo implements Action {
  constructor(public id: number, public text: string) {}

  update(state: State) {
    return [
      ...state,
      {
        id: this.id,
        text: this.text,
        completed: false
      }
    ];
  }
}

export class ToggleTodo implements Action {
  constructor(public id: number) {}

  update(state: State) {
    return state.map(todo =>
      todo.id === this.id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

const todos = (state: State = [], action: Action): State => {
  if (action.update) return action.update(state);
  return state;
};

export default todos;
