<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: Inter;
  src: url(/fonts/Inter-VariableFont_slnt,wght.ttf);
}

:root {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Inter, sans-serif;
  scroll-behavior: smooth;
  background-color: #1f1f1f;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-thumb {
  background: #28e98c;
  border: 0px none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #12db7a;
}

::-webkit-scrollbar-thumb:active {
  background: #05ad5c;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
