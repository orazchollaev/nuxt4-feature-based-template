<script setup lang="ts">
interface Emits {
  (e: "submit", title: string): void;
}

const emit = defineEmits<Emits>();
const title = ref("");

const handleSubmit = () => {
  if (title.value.trim()) {
    emit("submit", title.value.trim());
    title.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input
      v-model="title"
      type="text"
      placeholder="What needs to be done?"
      class="input"
    />
    <button type="submit" class="submit-btn">Add</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.input {
  flex: 1;
  padding: 0.75rem 1rem;
  background: #111;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #e2e8f0;
  transition: border-color 0.2s;
}

.input::placeholder {
  color: #4b5563;
}

.input:focus {
  outline: none;
  border-color: #00dc82;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: #00dc82;
  color: #0f0f0f;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.85;
}
</style>
