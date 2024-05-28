<template>
  <div class="grid grid-cols-12">
    <!-- Left side bar -->
    <!-- <div class="layout"></div> -->

    <!-- <div class="col-span-1 block md:hidden h-screen">
      <NavBar class="fixed top-[50%] -translate-y-[50%] ml-2" />
    </div> -->

    <!-- Left side Card -->
    <div class="col-span-11 lg:col-span-4 h-screen">
      <CardInfo
        class="lg:ml-5 lg:fixed lg:left-[0%] lg:-translate-x-[0%] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
      />
    </div>

    <!-- Right side Menu -->
    <!-- Left side bar -->
    <!-- <div class="layout"></div> -->

    <!-- Main content -->
    <main class="col-span-11 lg:col-span-7">
      <slot />
    </main>

    <!-- Right side Menu -->
    <div class="col-span-1 h-screen">
      <NavBar class="fixed top-[50%] -translate-y-[50%]" />
    </div>
  </div>
</template>
