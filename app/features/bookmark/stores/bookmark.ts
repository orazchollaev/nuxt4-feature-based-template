// app/features/bookmark/stores/bookmark.ts
import type { Bookmark } from "../types";

export const useBookmarkStore = defineStore("bookmark", () => {
  const bookmarks = ref<Bookmark[]>([
    {
      id: 1,
      title: "Nuxt Documentation",
      url: "https://nuxt.com",
    },
  ]);

  const addBookmark = (bookmark: Bookmark) => {
    bookmarks.value.push(bookmark);
  };

  return {
    bookmarks,
    addBookmark,
  };
});
