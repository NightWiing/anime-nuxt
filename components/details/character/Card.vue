<template>
  <div
    class="aspect-[6/9] relative hover:transition-transform ease-in-out hover:-translate-y-1 hover:z-10 hover:scale-105 delay-100 duration-300"
  >
    <img
      class="w-full h-full rounded-md"
      height="600"
      width="400"
      :alt="character.name"
      :src="imageUrl"
      loading="lazy"
    />

    <label class="text-white text-sm md:text-lg font-medium mt-2 block">
      {{ formatCharacterName(character.url) }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps(['character']);

const formatCharacterName = (name) => {
  return name.split('/').pop().replaceAll('_', ' ');
};

const imageUrl = computed(() => props.character.images?.webp?.image_url);
</script>
