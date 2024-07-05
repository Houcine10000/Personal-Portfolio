<template>
  <nuxt-link href="contact" class="hireMe-btn">
    <span
      class="flex items-center"
      v-for="(item, index) in hireMeBtn"
      :key="index"
    >
      <div class="dark:fill-buttons_primary social-svg pr-7" v-html="item.svg" />

      Send me a message
    </span>
  </nuxt-link>
</template>

<script setup>
import { hireMeBtn } from "~/assets/constants";
</script>

<style scoped>
a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 100%; /* Adjust the thickness of the line */
  left: 0;
  bottom: 0;
  @apply dark:bg-[#00eaff43] bg-[#50505043];
  transition: width 0.3s ease-in-out;
}

a:hover::after {
  animation: slideRight 0.3s forwards; /* Adjust the duration of the animation */
}

a:not(:hover)::after {
  animation: slideLeft 0.3s forwards; /* Adjust the duration of the animation */
}

@keyframes slideLeft {
  from {
    left: 0;
    width: 100%;
  }
  to {
    left: 100%;
    width: 0;
  }
}

@keyframes slideRight {
  from {
    right: 100%;
    width: 0;
  }
  to {
    right: 0;
    width: 100%;
  }
}
</style>
