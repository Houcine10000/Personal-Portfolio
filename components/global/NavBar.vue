<template>
  <ul
    class="nav-bar-ul"
  >
    <div class="nav-bar-li">
      <li
        class="group pb-5 last:pb-0 tooltip tooltip-left w-full flex items-center justify-center cursor-pointer"
        v-for="item in navLinks"
        :key="item.id"
      >
        <a
          class="social-svg sm:w-6 sm:h-6"
          v-html="item.svg"
          :data-tip="`${item.title}`"
          :href="`#${item.id}`"
        >
        </a>
      </li>
    </div>
  </ul>
</template>

<script setup>
import { navLinks } from "~/assets/constants";
</script>
