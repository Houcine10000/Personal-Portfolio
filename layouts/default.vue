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
      <div v-if="shouldShowDrawer" class="drawer drawer-overlay z-10">
        <input
          id="my-drawer-4"
          type="checkbox"
          v-model="isMenu"
          class="drawer-toggle hidden"
        />

        <div
          class="drawer-side fixed top-0 left-0 right-0 w-full transform transition-transform duration-300 ease-in-out"
        >
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="h-screen drawer-bg w-full px-16 flex items-center justify-center"
          >
            <!-- Sidebar content here -->
            <li class="flex flex-col w-full">
              <div
                @click="isMenu = false"
                v-for="(item, i) in navLinks"
                :key="item.id"
                class="py-8 text-2xl relative"
              >
                <nuxt-link
                  v-motion="SlideLeft"
                  :to="`/${item.id}`"
                  :class="{
                    active: isActive(item),
                    notActive: !isActive(item),
                  }"
                  class="absolute left-0 top-0 w-full h-full flex items-center justify-center"
                >
                  {{ item.title }}
                </nuxt-link>
              </div>
            </li>
          </ul>

          <!-- Socials -->
          <div
            class="absolute bottom-0 w-full flex justify-between px-10 py-10"
          >
            <div class="flex">
              <NuxtLink
                v-for="(item, index) in socialBtn"
                :key="index"
                :to="`${item.href}`"
                target="_blank"
                class="group p-3"
              >
                <span class="" v-html="item.svg" />
              </NuxtLink>
            </div>

            <!-- Theme Mode -->
            <div class="absolute right-28 top-8">
              <ToggleMode @toggle-theme="toggleDarkMode" :isDark="isDark" />
            </div>
          </div>
        </div>
      </div>

      <slot />
    </main>

    <div class="col-span-1 py-10 hidden xs:flex items-start justify-center">
      <ToggleMode @toggle-theme="toggleDarkMode" :isDark="isDark" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { socialBtn, navLinks } from "~/assets/constants";
import ToggleMode from "~/components/Chunk/toggleMode.vue";
import { SlideLeft } from "~/assets/motions";

const route = useRoute();
const isDark = ref(false);
const isMenu = ref(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("isDark", JSON.stringify(isDark.value));
  document.documentElement.classList.toggle("dark", isDark.value);
};

// On component mount, check local storage for dark mode preference
onMounted(() => {
  isDark.value = localStorage.getItem("isDark") === "true";

  updateDrawerVisibility();

  window.addEventListener("resize", updateDrawerVisibility);
});

// Function to toggle dark mode
const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};

// Function to check if the link is active
const isActive = (item) => {
  return item.id === route.hash.substring(1) || item.id === route.name;
};

const shouldShowDrawer = ref(false);

const updateDrawerVisibility = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    shouldShowDrawer.value = width <= 650;
    if (width > 650) {
      isMenu.value = false;
    }
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", updateDrawerVisibility);
});
</script>

<style>
.drawer-bg {
  background-color: rgba(57, 57, 57, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
@media (min-width: 651px) {
  .drawer {
    display: none;
  }
}

a.active::before,
a.notActive::after {
  content: "";
  position: absolute;
  width: 0;
  height: 4px;
  left: 0;
  bottom: 28px;
  background-color: #00eaff;
  transition: width 0.4s ease-in-out;
}

a.active::before {
  animation: slideLeft 0s forwards;
}
a.notActive:hover::after {
  animation: slideLeft 0.4s forwards;
}

a:not(.active)::before,
a.notActive:not(:hover)::after {
  animation: slideRight 0.4s forwards;
}

@keyframes slideRight {
  from {
    right: 0;
    width: 100%;
  }
  to {
    right: 100%;
    width: 0;
  }
}

@keyframes slideLeft {
  from {
    left: 100%;
    width: 0;
  }
  to {
    left: 0;
    width: 100%;
  }
}
</style>
