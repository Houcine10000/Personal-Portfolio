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
                v-for="item in navLinks"
                :key="item.id"
                class="py-8 text-2xl relative"
              >
                <nuxt-link
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
            <div class="flex justify-center">
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
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      <slot />
    </main>

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
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { socialBtn, navLinks } from "~/assets/constants";

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
