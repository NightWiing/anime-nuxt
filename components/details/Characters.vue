<template>
  <div class="text-white ml-8 md:ml-24 my-8 md:my-16 group">
    <h3 class="text-2xl font-semibold text-gray-400 mb-6">Characters</h3>

    <SwiperContent class="!overflow-visible" :carousel-items="characters">
      <template #carousel="{ item }">
        <DetailsCharacterCard :character="item.character" />
      </template>
    </SwiperContent>
  </div>
</template>

<script setup>
defineProps(['characters']);
</script>
