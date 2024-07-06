<template>
  <section id="home" class="section flex items-center">
    <!-- <div class="badg-box">
      <div class="badg">
        <svg
          class="fill-text_primary mr-2"
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          viewBox="0 -960 960 960"
          width="20"
        >
          <path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
          />
        </svg>
        INTRODUCE
      </div>
    </div> -->

    <div class="" v-motion-fade-visible>
      <p
        class="dark:text-text_primary ease-in duration-300 text-l_primary text-[2.4rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] xl:text-[4.5rem] font-light leading-tight"
      >
        Say Hi from
        <span
          class="bg-gradient-to-r text-gradient bg-clip-text text-transparent"
          >Hoceine</span
        >, Passionate coder crafting digital solutions with creativity and
        precision.
      </p>

      <p
        class="pt-10 ease-in duration-300 dark:text-white/55 text-l_secondary font-light"
      >
        I create and develop a clean UI/UX for my users
      </p>

      <div class="flex sm:justify-end items-center pt-16">
        <ChunkDown />
      </div>
    </div>
  </section>
</template>

<script setup>
import { SlideRight } from "~/assets/motions";
</script>
