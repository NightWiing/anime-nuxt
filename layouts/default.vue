<template>
  <div class="flex bg-black/60 h-screen">
    <SideBar />
    <div class="overflow-x-hidden flex-1 relative font-reddit">
      <slot />
    </div>
  </div>
</template>
