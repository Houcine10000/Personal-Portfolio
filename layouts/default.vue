<template>
  <div class="layout h-screen bg-[#1f1f1f]">
    <div class="grid grid-cols-12 mx-auto overflow-auto scroll-smooth">
      <!-- Left sidbar -->
      <div class="col-span-4 flex items-center">
        <div class="fixed ml-5">
          <CardInfo />
        </div>
      </div>

      <!-- Main content -->
      <main class="col-span-7 mr-16">
        <div class="h-screen">
          <slot />
        </div>
      </main>

      <!-- Right sidbar -->
      <div class="col-span-1 flex items-center justify-center">
        <div class="fixed mr-14">
          <NavBar />
        </div>
      </div>
    </div>
  </div>
</template>
