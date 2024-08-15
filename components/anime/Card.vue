<template>
  <div
    class="aspect-[6/9] rounded-md relative hover:transition-transform ease-in-out hover:-translate-y-1 hover:z-10 hover:scale-105 delay-100 duration-300"
  >
    <img
      class="rounded-md w-full h-full"
      loading="eager"
      height="600"
      width="400"
      :alt="imageAlt"
      :src="imageUrl"
    />
  </div>
</template>

<script setup>
defineProps(['item']);

const imageAlt = computed(
  () => item.title_english || item.title_japanese || item.title
);

const imageUrl = computed(() => item.images?.jpg?.large_image_url);
</script>
