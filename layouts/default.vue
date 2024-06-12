<template>
  <div class="grid grid-cols-12">
    <!-- Left side Card -->
    <div
      :class="`${$route.name == 'contact' ? 'hidden' : ''} col-span-11 lg:col-span-4 h-screen`"
    >
      <CardInfo
        class="lg:ml-5 lg:fixed lg:left-[0%] lg:-translate-x-[0%] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
      />
    </div>

    <!-- Main content -->
    <main class="col-span-11 lg:col-span-7">
      <slot />
    </main>

    <!-- Right side Menu -->
    <div class="col-span-1 h-screen">
      <NavBar :class="`fixed top-[50%] -translate-y-[50%] right-0 xl:right-12`" />
    </div>
  </div>
</template>
