<script setup lang="ts">
interface Emits {
  (e: "submit", title: string): void
}

const emit = defineEmits<Emits>()
const title = ref("")

const handleSubmit = () => {
  if (title.value.trim()) {
    emit("submit", title.value.trim())
    title.value = ""
  }
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <input v-model="title" type="text" :placeholder="$t('todo.inputPlaceholder')" class="input" />
    <button type="submit" class="submit-btn">{{ $t("todo.add") }}</button>
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
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-sub);
  transition: border-color 0.2s;
}

.input::placeholder {
  color: var(--text-dim);
}

.input:focus {
  outline: none;
  border-color: var(--accent);
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: var(--accent-text);
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
