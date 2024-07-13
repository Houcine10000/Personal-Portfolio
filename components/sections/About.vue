<template>
  <section
    class="section w-full h-full flex flex-col abt_md:flex-row gap-0 abt_md:gap-10 xl:gap-20"
    id="about"
    v-motion="SlideBottom"
  >
    <!-- <div class="badg-box">
      <div class="badg">
        <svg
          class="fill-[#ffff] mr-2"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"
          />
        </svg>
        ABOUT
      </div>
    </div> -->

    <div class="flex flex-col w-full">
      <h1
        class="text-[2rem] w-fit font-bold dark:text-white text-l_primary pb-1.5"
      >
        Hi there.
      </h1>

      <p
        class="leading-relaxed text-[22px] dark:text-slate-400 text-l_secondary font-normal mt-10"
      >
        Hey! I'm
        <span class="dark:text-buttons_primary text-l_primary"
          >Huceine ESSAMLALI</span
        >, a Front-end Developer based in
        <span class="dark:text-buttons_primary text-l_primary">Morocco</span>.
        My passion is to create elegant and functional web solutions that meet
        both industry standards and user needs. I'm dedicated to acquire new
        skills that prove useful in the web development landscape. My main stack
        currently is
        <span class="dark:text-buttons_primary text-l_primary"
          >Nuxt.js, Vue.js</span
        >
        in combination with
        <span class="dark:text-buttons_primary text-l_primary"
          >Tailwind CSS</span
        >.
      </p>
    </div>

    <div class="flex w-full abt_md:mt-16">
      <CardInfo />
    </div>
  </section>
</template>

<script setup>
import { SlideBottom } from "~/assets/motions";
</script>
