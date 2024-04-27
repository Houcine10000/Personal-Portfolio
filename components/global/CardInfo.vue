<template>
  <div class="border border-[#999]/55 rounded-[30px] card w-[22rem] px-8">
    <div class="flex flex-row justify-between px-0 card-body">
      <div class="text-3xl font-bold text-white w-[145px] h-fit relative">
        Huceine
        <div
          class="badge badge-xs py-[9px] text-[11px] font-bold bg-transparent border-2 border-white/55 text-white/75 absolute right-0 top-0"
        >
          H
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
      <p class="text-xs mt-4">© {{ currentYear }} Hocin. All Rights Reserved</p>
    </div>

    <div class="card-actions items-center justify-center">
      <div
        v-for="(item, index) in socialBtn"
        :key="index"
        class="social-btn group"
      >
        <span class="" v-html="item.svg" />
      </div>
    </div>

    <div class="card-actions items-center justify-center my-7">
      <button
        v-for="(item, index) in hireMeBtn"
        :key="index"
        class="group hireMe-btn"
      >
        <span
          class="fill-[#000] social-svg w-[18px] h-[18px]"
          v-html="item.svg"
        />

        hire me!
      </button>
    </div>
  </div>
</template>

<script setup>
import { socialBtn } from "~/assets/constants";
import { hireMeBtn } from "~/assets/constants";
const currentYear = new Date().getFullYear();
</script>
