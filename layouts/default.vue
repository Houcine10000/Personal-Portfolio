<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2">
      <NavBar :class="`fixed left-10`" />
    </div>

    <!-- Main content -->
    <main :class="`col-span-9`">
      <slot />
    </main>

    <div class="col-span-1 py-10 flex items-start justify-center">
      <div
        @click="toggleDark()"
        class="text-center p-3 clipath hover:bg-white/5 cursor-pointer transition-all ease-out duration-300"
      >
        <Icon
        class="h-8 w-8"
          :name="`${isDark ? 'heroicons-solid:moon' : 'heroicons-solid:sun'}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "#imports";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
