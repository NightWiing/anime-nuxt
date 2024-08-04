<template>
  <div class="my-12 md:my-24 ml-8 md:ml-16 group">
    <div class="flex gap-2 md:gap-5 items-center mb-3 md:mb-6">
      <slot name="header" />

      <nuxt-link
        :to="`/anime/${type}/${filter}`"
        class="text-cyan-500 hover:text-cyan-500/70"
      >
        <span class="flex items-center">
          See more
          <IconNext class="size-5" />
        </span>
      </nuxt-link>
    </div>
    <SwiperContent
      v-if="contentList && contentList.length"
      class="!overflow-visible"
      :carousel-items="contentList"
    >
      <template #carousel="{ item }">
        <nuxt-link :to="`/details/${item.mal_id}`">
          <ContentCard :item="item" />
        </nuxt-link>
      </template>
    </SwiperContent>
    <div class="flex justify-center" v-else>
      <p class="text-gray-200 text-sm md:text-base">
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
