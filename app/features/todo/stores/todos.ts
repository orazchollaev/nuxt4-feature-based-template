import type { Todo, TodoFilter } from "../types";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([
    {
      id: "1",
      title: "Learn Nuxt 4",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Build with barrel exports",
      completed: true,
      createdAt: new Date(),
    },
  ]);

  const filter = ref<TodoFilter>("all");
  const loading = ref(false);

  const filteredTodos = computed(() => {
    if (filter.value === "active") {
      return todos.value.filter((todo) => !todo.completed);
    }
    if (filter.value === "completed") {
      return todos.value.filter((todo) => todo.completed);
    }
    return todos.value;
  });

  const activeCount = computed(
    () => todos.value.filter((t) => !t.completed).length,
  );

  const completedCount = computed(
    () => todos.value.filter((t) => t.completed).length,
  );

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
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

  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((t) => t.id !== id);
  };

  const setFilter = (newFilter: TodoFilter) => {
    filter.value = newFilter;
  };

  const clearCompleted = () => {
    todos.value = todos.value.filter((t) => !t.completed);
  };

  return {
    todos: filteredTodos,
    filter,
    loading,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    clearCompleted,
  };
});
