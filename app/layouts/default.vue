<!-- app/layouts/default.vue -->
<template>
  <div class="default-layout">
    <LayoutHeader />

    <slot />

    <LayoutFooter />
  </div>
</template>

<style>
.default-layout {
  width: 100%;
}
</style>
