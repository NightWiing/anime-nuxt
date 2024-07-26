<template>
  <div class="flex flex-col-reverse md:flex-row bg-black/60 h-screen">
    <SideBar />
    <div id="default" class="overflow-x-hidden flex-1 relative font-reddit">
      <slot />
    </div>
  </div>
</template>
