<template>
  <div class="grid grid-cols-12">
    <!-- Navigation Bar Section -->
    <div class="col-span-12 xs:col-span-2">
      <NavBar class="fixed left-10 hidden xs:block" />

      <div
        class="w-full h-28 fixed z-50 flex items-center justify-between px-5 xs:hidden"
      >
        <strong class="text-4xl font-extrabold">H</strong>

        <!-- -------|> Menu <|-------- -->

        <label
          class="swap swap-rotate text-center p-3 clipath hover:bg-white/5 cursor-pointer transition-all ease-out duration-300"
        >
          <input
            @click="toggleMenu"
            type="checkbox"
            class="theme-controller"
            v-model="isMenu"
            value="synthwave"
          />

          <!-- Berger menu icon -->

          <svg
            class="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 6h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1zm18 5H3c-.552 0-1 .448-1 1s.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1zm0 6H3c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1s-.448-1-1-1z"
            />
          </svg>

          <!-- Close icon -->

          <svg
            class="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.36 6.64a1 1 0 00-1.41 0L12 11.59 7.05 6.64a1 1 0 10-1.41 1.41L10.59 13l-5.9 5.0a1 1 0 101.41 1.41L12 14.41l4.95 4.95a1 1 0 001.41-1.41L13.41 13l4.95-4.95a1 1 0 000-1.41z"
            />
          </svg>
        </label>
      </div>
    </div>

    <!-- Main content -->
    <main class="col-span-12 xs:col-span-9">
      <div class="drawer drawer-overlay">
        <input
          id="my-drawer-4"
          type="checkbox"
          v-model="isMenu"
          class="drawer-toggle hidden"
        />
        <div class="drawer-content">
          <!-- Page content here -->
          <slot />
        </div>
        <div
          class="drawer-side fixed top-0 left-0 right-0 transform -translate-y-full transition-transform duration-300 ease-in-out"
          :class="{ 'translate-y-0': isMenu }"
        >
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="menu bg-base-200 text-base-content min-h-screen w-full p-4"
          >
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </main>

    <!-- Toggle Dark Mode Button Section -->
    <div class="col-span-1 py-10 hidden xs:flex items-start justify-center">
      <label
        class="swap swap-rotate text-center p-3 clipath hover:bg-white/5 cursor-pointer transition-all ease-out duration-300 fixed"
      >
        <!-- this hidden checkbox controls the state -->
        <input
          @click="toggleDarkMode"
          type="checkbox"
          class="theme-controller"
          v-model="isDark"
          value="synthwave"
        />

        <!-- sun icon -->
        <svg
          class="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>

      <!-- <Icon
          class="h-8 w-8"
          :name="isDark ? 'heroicons-solid:moon' : 'heroicons-solid:sun'"
        /> -->
    </div>
  </div>
</template>

<script setup>
// Use refs for reactivity
const isDark = ref(false);
const isMenu = ref(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("isDark", isDark.value);
  document.documentElement.classList.toggle("dark", isDark.value);
};

// Function to toggle dark mode
const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};

// On component mount, check local storage for dark mode preference
onMounted(() => {
  isDark.value = localStorage.getItem("isDark") === "true";
});
</script>

<style>
.drawer-toggle:checked ~ .drawer-side {
  transform: translateY(0);
}
</style>
