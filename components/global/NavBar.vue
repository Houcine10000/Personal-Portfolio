<template>
  <!-- <ul class="nav-bar-ul">
    <div class="nav-bar-li">
      <li
        class="group mb-5 last:mb-0 tooltip tooltip-left w-full flex items-center justify-center cursor-pointer"
        v-for="item in navLinks"
        :key="item.id"
      >
        <nuxt-link
          :to="`${item.id == 'contact' ? '/' + item.id : '/' + item.id}`"
          class="social-svg sm:w-6 sm:h-6"
        >
          <div
            v-html="item.svg"
            :data-tip="`${item.title}`"
            :class="`${item.id === $route.hash || item.id === $route.name ? 'fill-buttons_primary' : ''}`"
          />
        </nuxt-link>
      </li>
    </div>
  </ul> -->
  <ul class="h-full flex flex-col justify-between items-center py-12">
    <li class="group py-5 flex h-fit flex-col items-center">
      <div
        class="mb-16 rotate-90 flex justify-center text-md font-semibold tracking-wider"
        v-for="item in navLinks"
        :key="item.id"
      >
        <nuxt-link
          :to="`${item.id == 'contact' ? '/' + item.id : '/' + item.id}`"
          :class="`${item.id === $route.hash || item.id === $route.name ? 'active' : 'notActive'}`"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </li>

    <div class="social">test</div>
  </ul>
</template>

<script setup>
import { navLinks } from "~/assets/constants";
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
  animation: slideRight 0s forwards;
}
a.notActive:hover::after {
  animation: slideRight 0.3s forwards;
}

a:not(.active)::before,
a.notActive:not(:hover)::after {
  animation: slideLeft 0.3s forwards;
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
