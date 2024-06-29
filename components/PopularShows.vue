<template>
  <div class="my-24 ml-24 group">
    <h3 class="text-2xl font-semibold text-gray-400 mb-6">Popular</h3>
    <SwiperContent
      v-if="popular && popular.length"
      class="!overflow-visible"
      :carousel-items="popular"
    >
      <template #carousel="{ item }">
        <ContentCard :item="item" />
      </template>
    </SwiperContent>
    <div class="flex justify-center" v-else>
      <p class="text-gray-200">
        No data available or an issue while fetching data try to reload the
        page.
      </p>
    </div>
  </div>
</template>

<script setup>
const { fetchTopWatchList } = useData();

const popular = ref([]);

popular.value = await fetchTopWatchList({
  filter: 'bypopularity',
  type: 'tv',
  page: 1,
  limit: 10,
});
</script>
