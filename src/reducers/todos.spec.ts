import todos, { AddTodo, ToggleTodo } from "./todos";

describe("todos reducer", () => {
  it("should handle ADD_TODO", () => {
    expect(todos([], new AddTodo(0, "Run the tests"))).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          }
        ],
        new AddTodo(1, "Use Redux")
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          },
          {
            text: "Use Redux",
            completed: false,
            id: 1
          }
        ],
        new AddTodo(2, "Fix the tests")
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        new ToggleTodo(1)
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });
});
