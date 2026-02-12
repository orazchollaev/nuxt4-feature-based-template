export const useTodo = () => {
  const todoStore = useTodoStore();

  const completedCount = computed(() => {
    return todoStore.todos.filter((t) => t.completed).length;
  });

  const totalCount = computed(() => {
    return todoStore.todos.length;
  });

  const progress = computed(() => {
    if (totalCount.value === 0) return 0;
    return Math.round((completedCount.value / totalCount.value) * 100);
  });

  return {
    todos: computed(() => todoStore.todos),
    completedCount,
    totalCount,
    progress,
    addTodo: todoStore.addTodo,
    toggleTodo: todoStore.toggleTodo,
    removeTodo: todoStore.removeTodo,
  };
};
