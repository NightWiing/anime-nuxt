<template>
  <div class="text-white ml-8 md:ml-16 my-6 md:my-12 group">
    <BaseHeader3 class="mb-4">Characters</BaseHeader3>

    <SwiperContent class="!overflow-visible" :carousel-items="characters">
      <template #carousel="{ item }">
        <DetailsCharacterCard :character="item" />
      </template>
    </SwiperContent>
  </div>
</template>

<script setup>
defineProps(['characters']);
</script>
