<template>
  <div
    class="aspect-[6/9] cursor-pointer rounded-md relative hover:transition-transform ease-in-out hover:-translate-y-1 hover:z-10 hover:scale-105 delay-100 duration-300"
  >
    <img
      class="rounded-md w-full h-full"
      loading="eager"
      height="600"
      width="400"
      :src="item.images && item.images.jpg && item.images.jpg.large_image_url"
    />
    <div
      class="bg-gradient-to-t from-black via-black/75 absolute h-40 w-full -bottom-1 rounded-md"
    >
      <label
        :title="item.title_english"
        class="text-white font-medium top-24 left-2 absolute line-clamp-2"
      >
        {{ item.title_english }}
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps(['item']);
</script>
