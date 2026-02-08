<!-- app/features/bookmark/components/BookmarkList.vue -->
<script setup lang="ts">
const { bookmarks } = useBookmark();
</script>

<template>
  <ul>
    <li v-for="item in bookmarks" :key="item.id">
      <a :href="item.url" target="_blank">
        {{ item.title }}
      </a>
    </li>
  </ul>
</template>
