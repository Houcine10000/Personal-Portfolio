<template>
  <ul class="border border-[#999]/55 rounded-full py-5 px-4">
    <li
      class="group pb-5 last:pb-0 tooltip tooltip-left w-full flex items-center justify-center cursor-pointer"
      v-for="item in navLinks"
      :key="item.id"
    >
      <a
        class="social-svg w-6 h-6"
        v-html="item.svg"
        :data-tip="`${item.title}`"
        :href="`#${item.id}`"
      ></a>
    </li>
  </ul>
</template>

<script setup>
import { navLinks } from "~/assets/constants";
</script>
