<template>
  <div class="my-24 ml-24 group">
    <h3 class="text-2xl font-semibold text-gray-400 mb-6">Favorites</h3>
    <ContentCarousel class="!overflow-visible" :carousel-items="favorites">
      <template #carousel="{ item }">
        <ContentCard :item="item" />
      </template>
    </ContentCarousel>
  </div>
</template>

<script setup>
const { fetchTopWatchList } = useData();

const favorites = ref([]);

favorites.value = await fetchTopWatchList({
  filter: 'favorite',
  type: 'tv',
  page: 1,
  limit: 10,
});
</script>
