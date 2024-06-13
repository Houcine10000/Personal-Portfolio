<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2">
      <NavBar :class="`fixed left-10`" />
    </div>

    <!-- Main content -->
    <main :class="`col-span-9`">
      <slot />
    </main>

    <div class="col-span-1 py-10 flex items-start justify-center">
      <div class="text-center p-4 clipath hover:bg-white/5 cursor-pointer transition-all ease-out duration-300 ">sun</div>
    </div>
  </div>
</template>
