<template>
  <div class="grid gap-4 sm:grid-cols-12">
    <!-- <div class="bg-teal-400 col-span-1 h-screen"></div> -->

    <!-- Left sidbar -->
    <div class="sm:col-span-11 xl:col-span-4 h-[100vh]">
      <CardInfo class="ml-5 xl:fixed lg:top-[50%] lg:-translate-y-[50%]" />
    </div>

    <!-- Main content -->
    <main class="sm:col-span-11 xl:col-span-7">
      <slot />
    </main>

    <!-- Right sidbar -->
    <div class="col-span-1 h-screen">
      <NavBar class="fixed top-[50%] -translate-y-[50%]" />
      <SideBar class="fixed top-20 w-fit hidden" />
    </div>
  </div>
</template>
