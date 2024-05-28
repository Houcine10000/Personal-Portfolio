<script setup>
import { services } from "~/assets/constants";
</script>

<template>
  <div
    class="section w-full flex flex-nowrap gap-5 justify-between md:justify-around items-center"
  >
    <div
      class="p-[1px] bg-gradient-to-t text-gradient rounded-[20px] transition-all duration-200 w-auto pointer-events-none sm:pointer-events-auto"
      v-for="service in services"
      :key="service.title"
      data-tilt
      data-tilt-scale="1.05"
    >
      <div
        class="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-center"
      >
        <NuxtImg
          :src="service.icon"
          alt="service.title"
          loading="lazy"
          format="webp"
          quality="70"
          class="sm:w-16 xs:w-14 w-10"
        />
        <p class="font-bold xs:text-[16px] text-[12px] sm:text-[20px] max-w-[150px]">{{ service.title }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
