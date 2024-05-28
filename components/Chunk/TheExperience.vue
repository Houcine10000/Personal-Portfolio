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

<template>
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

  // const pointLight = new THREE.PointLight(0xffffff);
  // pointLight.position.set(5, 5, 5);

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
</style>
