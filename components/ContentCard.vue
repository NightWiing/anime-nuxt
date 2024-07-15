<template>
  <div
    class="aspect-[6/9] rounded-md relative hover:transition-transform ease-in-out hover:-translate-y-1 hover:z-10 hover:scale-105 delay-100 duration-300"
  >
    <img
      class="rounded-md w-full h-full"
      loading="eager"
      height="600"
      width="400"
      :src="item.images && item.images.jpg && item.images.jpg.large_image_url"
    />
  </div>
</template>

<script setup>
defineProps(['item']);
</script>
