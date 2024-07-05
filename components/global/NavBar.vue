<template>
  <ul class="h-full py-12">
    <li class="h-[80%] pb-10 pt-3 flex flex-col items-center justify-between">
      <div
        class="-rotate-90 w-full text-center text-md font-semibold tracking-wider"
        v-for="item in navLinks"
        :key="item.id"
      >
        <nuxt-link
          :to="`/${item.id}`"
          :class="{ active: isActive(item), notActive: !isActive(item) }"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </li>

    <div class="flex flex-col items-center absolute w-full bottom-12">
      <NuxtLink
        v-for="(item, index) in socialBtn"
        :key="index"
        :to="`${item.href}`"
        target="_blank"
        class="group p-3"
      >
        <span class="" v-html="item.svg" />
      </NuxtLink>
    </div>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";
import { socialBtn, navLinks } from "~/assets/constants";

// Get the current route
const route = useRoute();

// Function to check if the link is active
const isActive = (item) => {
  return item.id === route.hash.substring(1) || item.id === route.name;
};
</script>

<style scoped>
a.active::before,
a.notActive::after {
  content: "";
  position: absolute;
  width: 0;
  height: 4px;
  left: 0;
  bottom: 10px;
  background-color: #00eaff;
  transition: width 0.3s ease-in-out;
}

a.active::before {
  animation: slideLeft 0s forwards;
}
a.notActive:hover::after {
  animation: slideLeft 0.3s forwards;
}

a:not(.active)::before,
a.notActive:not(:hover)::after {
  animation: slideRight 0.3s forwards;
}

@keyframes slideRight {
  from {
    right: 0;
    width: 100%;
  }
  to {
    right: 100%;
    width: 0;
  }
}

@keyframes slideLeft {
  from {
    left: 100%;
    width: 0;
  }
  to {
    left: 0;
    width: 100%;
  }
}
</style>
