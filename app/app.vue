<script setup lang="ts">
import { useShortcuts } from "vue-shortcut-manager"

const router = useRouter()

useShortcuts([
  { key: "shift+h", description: "Go to Home", handler: () => router.push("/") },
  { key: "shift+t", description: "Go to Todo", handler: () => router.push("/todo") },
])
</script>

<template>
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style></style>
