<template>
  <div class="section h-fit">
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 mb-9 xs:mx-10 sm:mx-0 lg:mx-10 xl:mx-0 xl:mr-5"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        class="p-[1px] bg-gradient-to-b text-gradient rounded-2xl"
        data-tilt
        data-tilt-scale="1.05"
        v-motion="motion ? SlideLeft : SlideRight"
      >
        <div
          class="p-5 ease-in duration-300 dark:bg-secondary bg-l_exstra_text rounded-2xl flex flex-col relative h-full"
        >
          <div class="w-full h-[230px] overflow-hidden relative">
            <NuxtPicture
              :src="project.image"
              :img-attrs="{
                alt: project.name + ' image',
                class: 'w-full h-full object-cover rounded-2xl ',
                width: 200,
              }"
              format="avif,webp"
              loading="lazy"
            />
            <div class="absolute top-2 right-2 z-50 flex gap-2">
              <a
                class="w-10 h-10 bg-tertiary rounded-full p-2"
                :href="project.source_code_link"
                target="_blank"
                v-if="project.source_code_link"
                :aria-label="`Visit project on GitHub: ${project.name}`"
              >
                <NuxtImg
                  :src="github"
                  alt="GitHub Logo"
                  width="50"
                  height="50"
                  format="webp"
                  quality="70"
                  loading="lazy"
                />
              </a>
              <a
                v-if="project.demo"
                class="w-10 h-10 bg-tertiary rounded-full p-2"
                :href="project.demo"
                target="_blank"
                :aria-label="`Visit project demo: ${project.name}`"
              >
                <NuxtImg
                  :src="visit"
                  alt="Visit Logo"
                  width="40"
                  format="webp"
                  quality="70"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a
                v-if="project.chrome"
                class="w-10 h-10 bg-tertiary rounded-full p-2"
                :href="project.chrome"
                target="_blank"
                :aria-label="`Visit hoceine el idrissi extention on chrome of the extention : ${project.name}`"
              >
                <NuxtImg
                  :src="chrome"
                  :alt="`Visit hoceine el idrissi extention on chrome of the extention : ${project.name}`"
                  width="40"
                  format="webp"
                  quality="70"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a
                v-if="project.firefox"
                class="w-10 h-10 bg-tertiary rounded-full p-2"
                :href="project.firefox"
                target="_blank"
                :aria-label="`Visit hoceine el idrissi extention on firefox of the extention : ${project.name}`"
              >
                <NuxtImg
                  :src="firefox"
                  :alt="`Visit hoceine el idrissi extention on firefox of the extention : ${project.name}`"
                  width="40"
                  format="webp"
                  quality="70"
                  height="40"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div class="my-5 h-fit">
            <h3
              class="sm:text-[21px] ease-in duration-300 text-[16px] font-semibold break-words dark:text-text_primary text-l_primary"
            >
              {{ project.name }}
            </h3>
            <p
              class="sm:text-[15px] ease-in duration-300 text-[12px] leading-6 dark:text-l_border text-l_text"
            >
              {{ project.description }}
            </p>
          </div>

          <div class="flex-grow"></div>
          <div class="mt-1 flex flex-wrap gap-2">
            <p v-for="tag in project.tags" :class="tag.color">
              #{{ tag.name }}
            </p>
          </div>

          <a
            :href="`/projects${project.url}`"
            target="_blank"
            :aria-label="`Explore ${project.name}`"
            role="button"
            tabindex="0"
            class="px-2 py-1 border rounded-lg text-center flex justify-between items-center mt-3 green-text-gradient font-semibold group"
          >
            <p>Explore Project</p>
            <img
              :src="search"
              class="w-5 h-5 transition-all duration-1000 group-hover:-rotate-180 group-hover:-translate-x-8"
              :alt="`Show me more about  ${project.name}`"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { projects } = defineProps(["projects"]);
import { github, visit, search } from "~/assets";
import { SlideBottom, SlideLeft, SlideRight } from "~/assets/motions";

const motion = ref(false);

const updateMotionType = () => {
  const width = window.innerWidth;

  localStorage.setItem("window", width);

  console.log(motion.value);
};

onMounted(() => {
  if (localStorage.getItem("window") <= 650) {
    motion.value = true;
  } else {
    motion.value = false;
  }

  updateMotionType();

  window.addEventListener("resize", updateMotionType);
});
</script>
