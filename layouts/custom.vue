<template>
  <div class="grid grid-cols-12">

    <!-- Main content -->
    <main
      :class="`col-span-10 md:col-span-11 `"
    >
      <slot />
    </main>

    <!-- Right side Menu -->
    <div class="col-span-2 md:col-span-1 h-screen">
      <NavBar :class="`fixed top-[50%] -translate-y-[50%]`" />
    </div>
  </div>
</template>
