<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label
        for="my-drawer-4"
        class="drawer-button btn group bg-transparent hover:bg-transparent btn-circle no-animation social-btn border"
      >
        <div class="flex items-end flex-col gap-2">
          <span
            class="w-6 h-[2.5px] bg-white group-hover:bg-[#28e98c] social-svg"
          ></span>
          <span
            class="w-3 h-[1.5px] bg-white group-hover:bg-[#28e98c] social-svg"
          ></span>
        </div>
      </label>
    </div>

    <!-- Sidebar content here -->
    <div class="drawer-side">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li v-for="item in navLinks" :key="item.id">
          <a :href="`#${item.id}`">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { navLinks } from "~/assets/constants";
</script>
