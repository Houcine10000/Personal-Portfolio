<template>
  <div class="grid grid-cols-12">
    <!-- Navigation Bar Section -->
    <div class="col-span-2">
      <NavBar class="fixed left-10" />
    </div>

    <!-- Main content -->
    <main class="col-span-9">
      <slot />
    </main>

    <!-- Toggle Dark Mode Button Section -->
    <div class="col-span-1 py-10 flex items-start justify-center">
      <div
        @click="toggleDarkMode"
        class="text-center p-3 clipath hover:bg-white/5 cursor-pointer transition-all ease-out duration-300 fixed"
      >
        <Icon
          class="h-8 w-8"
          :name="isDark ? 'heroicons-solid:moon' : 'heroicons-solid:sun'"
        />
      </div>
    </div>
  </div>
</template>


<script setup>
// Use refs for reactivity
const isDark = ref(false);

useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: `
        (function() {
          const isDark = localStorage.getItem('isDark') === 'true';
          if (isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
    },
  ],
});

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("isDark", isDark.value);
  document.documentElement.classList.toggle("dark", isDark.value);
};

// On component mount, check local storage for dark mode preference
onMounted(() => {
  const storedIsDark = localStorage.getItem("isDark");
  if (storedIsDark === "true") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>

