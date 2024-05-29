<!-- <script setup lang="ts">
import {
  Fog,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from "three";

import { useWindowSize } from "@vueuse/core";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

let renderer: WebGLRenderer;
let controls: OrbitControls;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const bgColor = new Color("#040918");

const scene = new Scene();

scene.fog = new Fog(bgColor, 0.1, 75);
scene.background = bgColor;

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 2, 70);

scene.add(camera);

const ambientlight = new AmbientLight(0xffffff, 1);
scene.add(ambientlight);

const gltfloader = new GLTFLoader();

gltfloader.load("/moduls/labtop/scene.gltf", (gltf) => {
  console.log(gltf);
  scene.add(gltf.scene);
});

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    updateRenderer();
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};
</script>

<template>
  <canvas ref="experience"></canvas>
</template> -->

<!-- <template>
  <div ref="container3D" class="" id="container3D"></div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// References to DOM element and Three.js objects
const container3D = ref(null);
let scene, camera, renderer, object;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const objToRender = "labtop";

const initScene = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
  );
  camera.position.z = 70;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container3D.value.appendChild(renderer.domElement);

  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
};

const loadModel = () => {
  const loader = new GLTFLoader();
  loader.load(
    `moduls/${objToRender}/scene.gltf`,
    (gltf) => {
      object = gltf.scene;
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.error(error);
    }
  );
};

const animate = () => {
  requestAnimationFrame(animate);
  if (object) {
    object.rotation.y = 2.6 + (mouseX / window.innerWidth) * 1;
    object.rotation.x = 0.4 + (mouseY * 0.5) / window.innerHeight;
  }
  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const onMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
};

onMounted(() => {
  initScene();
  loadModel();
  animate();
  window.addEventListener("resize", onWindowResize);
  document.addEventListener("mousemove", onMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  document.removeEventListener("mousemove", onMouseMove);
});
</script>

<style scoped>
#container3D {
  width: 100%;
  height: 100vh;
}
</style> -->

<template>
  <section class="section">
    <form class="max-w-lg mx-auto">
      <div class="text-3xl font-medium text-white relative h-20 mb-16">
        <span> Say hello </span>

        <div class="line-shape"></div>
      </div>

      <div class="relative z-0 w-full mb-10 group">
        <input
          type="text"
          name="floating_text"
          id="floating_text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />

        <label
          for="floating_text"
          class="peer-focus:font-medium absolute text-sm text-white duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
          >Your email</label
        >

        <div
          class="button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[3px] bg-gradient-to-r from-buttons_primary from-50% to-slate-600 to-50%"
        ></div>
      </div>

      <div class="relative z-0 w-full mb-16 group">
        <input
          type="text"
          name="floating_text"
          id="floating_text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />

        <label
          for="floating_text"
          class="peer-focus:font-medium absolute text-sm text-white duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
          >Message</label
        >

        <div
          class="button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[3px] bg-gradient-to-r from-buttons_primary from-50% to-slate-600 to-50%"
        ></div>
      </div>

      <button
        type="submit"
        class="contact-btn"
        v-for="(item, index) in hireMeBtn"
        :key="index"
      >
        <div class="fill-primary social-svg pr-7" v-html="item.svg" />

        Send message
      </button>
    </form>
  </section>
</template>

<script setup>
import { hireMeBtn } from "~/assets/constants";
</script>

<style>
.button {
  background-size: 200% 100%;
}
</style>
