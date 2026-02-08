// app/features/bookmark/composables/useBookmark.ts
export const useBookmark = () => {
  const store = useBookmarkStore();

  return {
    bookmarks: store.bookmarks,
    addBookmark: store.addBookmark,
  };
};
