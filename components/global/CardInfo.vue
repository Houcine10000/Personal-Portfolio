<template>
  <div class="card-wrapper lg:w-[30rem] h-[42rem]">
    <div class="card-content card rounded-none px-8">
      <div class="flex flex-row justify-between px-0 card-body">
        <div class="text-4xl font-bold flex gap-1">
          <div class="text-white">Huceine</div>

          <div
            class="text-[11px] font-bold w-5 h-5 rounded-full border border-white/55"
          >
            <div
              class="flex items-center justify-center w-full h-full rounded-full"
            >
              H
            </div>
          </div>
        </div>

        <div class="text-white">Developer</div>
      </div>

      <figure class="px-4 h-52">
        <img
          class="object-cover h-full w-64 rounded-3xl"
          src="/images/zang.jpg"
          alt="Shoes"
        />
      </figure>

      <div class="flex justify-center items-center card-body mt-4">
        <p class="text-lg leading-none text-white font-light">
          essamlalielhoucine60@gmail.com
        </p>
        <p class="text-lg text-white font-light">Base in Morocco</p>
        <p class="text-xs mt-4 text-slate-400">
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
