import type { Todo, CreateTodoDTO } from "../types/index";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([
    {
      id: "1",
      title: "Learn Nuxt 4",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Build feature-based app",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const addTodo = (data: CreateTodoDTO) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: data.title,
      completed: false,
      createdAt: new Date(),
    };
    todos.value.push(newTodo);
  };

  const toggleTodo = (id: string) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((t) => t.id !== id);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
});
