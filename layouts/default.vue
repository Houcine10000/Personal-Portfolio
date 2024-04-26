<template>
  <div class="grid gap-4 sm:grid-cols-12">
    <!-- Left sidbar -->
    <div class="rounded-lg shadow sm:col-span-12 lg:col-span-4 h-[100vh]">
      <CardInfo class="ml-5 lg:fixed lg:top-[50%] lg:-translate-y-[50%]" />
    </div>
    <!-- Main content -->
    <main class="rounded-lg shadow sm:col-span-12 lg:col-span-7">
      <slot />
    </main>
    <!-- Right sidbar -->
    <div class="rounded-lg shadow lg:col-span-1 h-[100vh]">
      <NavBar class="fixed top-[50%] -translate-y-[50%] hidden xl:block" />
      <SideBar class="fixed xl:hidden block" />
    </div>
  </div>
</template>
