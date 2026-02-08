// app/features/todo/stores/todo.ts

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  const addTodo = (title: string) => {
    todos.value.push({
      id: Date.now(),
      title,
      completed: false,
    });
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  };

  return { todos, addTodo, toggleTodo };
});
