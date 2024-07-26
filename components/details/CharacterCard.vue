<template>
  <div
    class="aspect-[6/9] rounded-md relative hover:transition-transform ease-in-out hover:-translate-y-1 hover:z-10 hover:scale-105 delay-100 duration-300"
  >
    <img
      class="rounded-md w-full h-full"
      loading="eager"
      height="600"
      width="400"
      :alt="character.name"
      :src="
        character.images &&
        character.images.jpg &&
        character.images.jpg.image_url
      "
    />
    <label class="text-white text-sm md:text-lg font-medium mt-2 block">{{
      formatCharacterName(character.url)
    }}</label>
  </div>
</template>

<script setup>
defineProps(['character']);

const formatCharacterName = (name) => {
  return name.split('/').pop().replaceAll('_', ' ');
};
</script>
