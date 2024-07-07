<template>
  <div
    id="skils"
    class="section h-[100vh] flex flex-wrap items-center justify-center gap-4"
    v-motion="SlideBottom"
  >
    <div>
      <div class="text-center flex items-center justify-center">
        <h1
          class="text-[3rem] text-nowrap xs:text-[3.5rem] sm:text-[4rem] font-bold dark:text-white text-l_primary"
        >
          Tech Stack
        </h1>
        <div class="line-smpl ml-2 "></div>
      </div>

      <div
        class="flex flex-wrap gap-5 xs:gap-8 sm:gap-16 mt-14 justify-center items-center max-w-5xl"
      >
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="transition-all duration-1000 group relative"
        >
          <div
            class="w-20 h-20 p-2 bg-[#ffffff11] rounded-xl hover:border-teal-500 hover:p-3 transition-all duration-500"
          >
            <NuxtImg
              format="webp"
              quality="70"
              :src="tech.icon"
              :alt="tech.name"
              loading="lazy"
              width="80"
              height="80"
            />
          </div>
          <div
            class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-slate-500 py-[6px] px-4 text-sm font-semibold text-white opacity-0 sm:group-hover:opacity-100"
            :aria-hidden="true"
          >
            <span
              class="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-500"
            ></span>
            <span :aria-hidden="true">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SlideBottom } from "~/assets/motions";

import { technologies } from "~/assets/constants";
</script>
