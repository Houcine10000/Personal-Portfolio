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

.page-enter-active,
.page-leave-active {
  transition: all 0.8s ease;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>

<script setup>
import { SlideBottom } from "./assets/motions";
</script>
