<!-- app/features/todo/components/Item.vue -->
<template>
  <div
    class="todo-item"
    :class="{ completed: todo.completed }"
    @click="$emit('toggle', todo.id)"
  >
    <div class="checkbox-wrapper">
      <input
        type="checkbox"
        :checked="todo.completed"
        class="todo-checkbox"
        @click.stop
      />
      <div class="checkbox-custom">
        <svg
          v-if="todo.completed"
          class="check-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>

    <span class="todo-title">{{ todo.title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ todo: Todo }>();
defineEmits<{
  toggle: [id: number];
  delete: [id: number];
}>();
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.todo-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #667eea;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.todo-item:hover {
  border-color: #667eea;
  background: white;
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.todo-item:hover::before {
  transform: scaleY(1);
}

.todo-item.completed {
  background: #f0fff4;
  border-color: #48bb78;
  opacity: 0.8;
}

.todo-item.completed::before {
  background: #48bb78;
  transform: scaleY(1);
}

/* Checkbox */
.checkbox-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.todo-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid #cbd5e0;
  border-radius: 0.375rem;
  background: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-item:hover .checkbox-custom {
  border-color: #667eea;
}

.todo-item.completed .checkbox-custom {
  background: #48bb78;
  border-color: #48bb78;
}

.check-icon {
  width: 16px;
  height: 16px;
  stroke-width: 3;
  color: white;
  animation: checkmark 0.3s ease-in-out;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Title */
.todo-title {
  flex: 1;
  font-size: 1.1rem;
  color: #2d3748;
  font-weight: 500;
  transition: all 0.3s ease;
}

.todo-item.completed .todo-title {
  text-decoration: line-through;
  color: #718096;
}

/* Responsive */
@media (max-width: 640px) {
  .todo-item {
    padding: 1rem;
  }

  .todo-title {
    font-size: 1rem;
  }

  .todo-actions {
    opacity: 1;
  }
}
</style>
