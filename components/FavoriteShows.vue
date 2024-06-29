<template>
  <div class="my-24 ml-24 group font-reddit">
    <h3 class="text-2xl font-semibold text-gray-400 mb-6">Favorites</h3>
    <SwiperContent
      v-if="favorites && favorites.length"
      class="!overflow-visible"
      :carousel-items="favorites"
    >
      <template #carousel="{ item }">
        <ContentCard :item="item" />
      </template>
    </SwiperContent>
    <div class="flex justify-center" v-else>
      <p class="text-white">
        No data available or an issue while fetching data try to reload the
        page.
      </p>
    </div>
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
