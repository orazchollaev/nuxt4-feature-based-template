<script lang="ts" setup>
import { useBookmark } from "../composables/useBookmark";

const { list } = useBookmark();
</script>

<template>
  <div>
    <h3>Bookmark List</h3>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
