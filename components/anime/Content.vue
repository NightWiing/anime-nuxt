<template>
  <div class="my-24 ml-24 group">
    <h3 class="text-2xl font-semibold text-gray-400 mb-6">
      <slot name="header" />
    </h3>
    <SwiperContent
      v-if="contentList && contentList.length"
      class="!overflow-visible"
      :carousel-items="contentList"
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
const props = defineProps({
  filter: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
const { fetchTopWatchList } = useData();

const contentList = ref([]);

contentList.value = await fetchTopWatchList({
  filter: props.filter,
  type: props.type,
  page: 1,
  limit: 15,
});
</script>
