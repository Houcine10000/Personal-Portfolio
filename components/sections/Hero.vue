<template>
  <section class="h-screen pt-20" id="home">
    <div
      v-motion-slide-bottom
      class="badge badge-outline text-white font-light py-4 px-4 border-[#999]/55"
    >
      <svg
        class="fill-[#ffff] mr-2"
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

    <div class="py-14">
      <p
        class="text-white text-[3.50rem] text-wrap font-light leading-tight whitespace-normal"
      >
        Say Hi from <span class="text-[#28e98c]">Hoceine</span>, Passionate
        coder crafting digital solutions with creativity and precision.
      </p>

      <!-- <p class="pt-12 text-white/55 font-light w-96">
        I create and develop a clean UI/UX for my users
      </p> -->
    </div>

    <div class="flex justify-center items-center pt-20">
      <ChunkDown />
    </div>
  </section>
</template>

<script setup>
// const initial = {
//   y: 50,
//   opacity: 0,
//   transition: {
//     stiffness: 100,
//   },
// };

// const enter = {
//   y: 0,
//   opacity: 1,
//   transition: {
//     stiffness: 100,
//     ease: "easeInOut",
//   },
// };
</script>
