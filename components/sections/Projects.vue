<template>
  <section id="projects" class="section h-fit">
    <!-- <div class="badg-box">
      <div class="badg">
        <svg
          width="20"
          class="fill-white mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path
            d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"
          />
        </svg>
        projects
      </div>
    </div> -->

    <div class="text-center flex items-center justify-center">
      <h1
        class="text-[3rem] text-nowrap xs:text-[3.5rem] sm:text-[4rem] font-bold dark:text-white text-l_primary transition-colors ease-in duration-300"
      >
        Projects
      </h1>
      <div class="line-smpl ml-2"></div>
    </div>
  </section>
  <LazyChunkProjectTitle :projects="projects" />
</template>

<script setup>
import { projects } from "~/assets/constants";
</script>
