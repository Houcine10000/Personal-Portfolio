<template>
  <ul class="nav-bar-ul">
    <div class="nav-bar-li">
      <li
        class="group mb-5 last:mb-0 tooltip tooltip-left w-full flex items-center justify-center cursor-pointer"
        v-for="item in navLinks"
        :key="item.id"
      >
        <nuxt-link
          :to="`${item.id == 'contact' ? '/' + item.id : '/#' + item.id}`"
          class="social-svg sm:w-6 sm:h-6"
        >
          <div v-html="item.svg" :data-tip="`${item.title}`" />
        </nuxt-link>
      </li>
    </div>
  </ul>
</template>

<script setup>
import { navLinks } from "~/assets/constants";
</script>
