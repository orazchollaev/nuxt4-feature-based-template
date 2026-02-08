// app/features/todo/composables/useTodo.ts

export const useTodo = () => {
  const store = useTodoStore();

  const activeTodos = computed(() => store.todos.filter((t) => !t.completed));

  const completedTodos = computed(() => store.todos.filter((t) => t.completed));

  return {
    todos: store.todos,
    activeTodos,
    completedTodos,
    addTodo: store.addTodo,
    toggleTodo: store.toggleTodo,
  };
};
