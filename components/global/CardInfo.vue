<template>
  <div class="card-wrapper md:w-[22rem] lg:w-[26rem] w-full h-[40rem] ">
    <div class="card-content card rounded-none px-8">
      <div class="flex flex-row justify-between px-0 card-body">
        <div class="text-4xl font-bold flex gap-1">
          <div class="dark:text-white text-l_primary">Huceine</div>

          <div
            class="text-[11px] font-bold w-5 h-5 rounded-full border border-white/55"
          >
            <div
              class="flex items-center justify-center w-full h-full rounded-full dark:text-white text-l_primary"
            >
              H
            </div>
          </div>
        </div>

        <div class="dark:text-white text-l_primary">Developer</div>
      </div>

      <figure class="px-4 h-52">
        <img
          class="object-cover object-left-top h-full w-64 rounded-3xl"
          src="/images/profile.png"
          alt="Shoes"
        />
      </figure>

      <div class="flex justify-center items-center card-body mt-4">
        <p class="text-lg leading-none dark:text-white text-l_primary font-light">
          essamlalielhoucine60@gmail.com
        </p>
        <p class="text-lg dark:text-white text-l_primary font-light">Base in Morocco</p>
        <p class="text-xs mt-4 dark:text-slate-400 text-slate-500">
          © {{ currentYear }} Hocin. All Rights Reserved
        </p>
      </div>

      <div class="card-actions items-center justify-center">
        <a
          v-for="(item, index) in socialBtn"
          :key="index"
          class="social-btn group"
          :href="`${item.href}`"
          target="_blank"
        >
          <span class="" v-html="item.svg" />
        </a>
      </div>

      <div class="card-actions items-center justify-center my-7">
        <ChunkButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialBtn } from "~/assets/constants";
const currentYear = new Date().getFullYear();
</script>
