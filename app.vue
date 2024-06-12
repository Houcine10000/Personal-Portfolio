<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: Inter;
  src: url(/fonts/Inter-VariableFont_slnt,wght.ttf);
}

.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-to,
.layout-leave-from,
.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>

<script setup>
import { SlideBottom } from "./assets/motions";
</script>
