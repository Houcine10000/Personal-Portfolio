<template>
  <div class="w-fit h-fit relative cursor-pointer bottom-5">
    <nuxt-link to="#projects">
    <div
      class="flex flex-col items-center justify-center ease-in duration-300 w-44 h-44 border rounded-full dark:border-white/15 border-l_border"
    >
      <p
        :class="`${circularText ? 'animate-border-spin' : ''} font-normal uppercase text-[18px]`"
        ref="circularText"
      >
        my projects • my projects •
      </p>

        <div class="arrow w-10 h-10 absolute">
          <Icon class="w-10 h-10" name="charm:chevrons-down" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import CircleType from "circletype";

const circularText = ref(null);

onMounted(() => {
  // Initialize CircleType
  const rotate = new CircleType(circularText.value).radius(0);

  // Add scroll listener when the component is mounted
  // window.addEventListener("scroll", handleScroll);
});

// Define handleScroll function
// const handleScroll = () => {
//   if (circularText.value) {
//     circularText.value.style.transform = `rotate(${window.scrollY * 0.40}deg)`;
//   }
// };
</script>

<style scoped>
.animate-spin {
  animation-duration: 6s;
}
</style>
