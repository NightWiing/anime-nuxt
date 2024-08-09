<template>
  <div
    class="flex items-center justify-center bg-black/60 backdrop-blur-lg border rounded-full p-2 cursor-pointer"
  >
    <input
      class="bg-transparent transition-all delay-100 duration-300 ease-in-out w-0 text-white text-sm focus-visible:outline-0"
      :class="{ 'w-48 px-1.5': isOpen }"
      placeholder="Search"
      type="text"
    />

    <IconSearch class="text-white size-6" @click="isOpen = !isOpen" />
  </div>
</template>

<script setup>
const isOpen = ref(false);
</script>
