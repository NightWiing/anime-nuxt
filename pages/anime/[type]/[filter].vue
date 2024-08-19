<template>
  <h3
    class="md:text-2xl font-medium md:font-semibold text-gray-400 px-4 pt-4 md:px-8 md:pt-8 mt-16"
  >
    {{ title }} {{ page }}
  </h3>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3 md:gap-y-6 p-4 md:p-8 transition-all duration-500"
  >
    <template v-for="(item, index) in contentList" :key="index">
      <Transition
        appear
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform translate-y-8 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-1000 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-8 opacity-0"
      >
        <nuxt-link :to="`/details/${item.mal_id}`">
          <AnimeCard :item="item" />
        </nuxt-link>
      </Transition>
    </template>
  </div>

  <BaseInfiniteLoading
    v-if="isNextPageAvailable"
    :is-loading="isLoadingMore"
    @load-more="loadMore"
  />
</template>

<script setup>
useHead({
  title: 'Tv, Shows & more | Nuxt Anime',
});

const {
  fetchSeeMoreList,
  paginationDetails,
  loadMoreResults,
  contentList,
  page,
  title,
} = useSeeMore();

const isLoadingMore = ref(false);

await fetchSeeMoreList();

const isNextPageAvailable = computed(
  () => paginationDetails.value?.has_next_page
);

const loadMore = async () => {
  isLoadingMore.value = true;
  await loadMoreResults();
  isLoadingMore.value = false;
};
</script>
