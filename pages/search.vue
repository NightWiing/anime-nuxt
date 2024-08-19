<template>
  <div ref="search" class="mt-16">
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <BaseLoader class="size-24" fill="#06b6d4" />
    </div>
    <template v-else>
      <div
        v-if="isNoResultsFound"
        class="flex justify-center text-white font-medium md:text-xl mt-5 md:mt-10"
      >
        No results found, try another keyword...
      </div>
      <template v-else-if="searchResults.length">
        <div class="px-2 py-2 md:py-2.5 md:px-5">
          <p class="text-white font-medium">
            Searching for: {{ $route.query.search }}
          </p>
          <p
            v-if="paginationDetails && paginationDetails.items"
            class="text-white font-medium mt-2"
          >
            Results: {{ paginationDetails.items.total }}
          </p>
        </div>
        <div
          class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3 md:gap-y-6 px-2 py-2 md:py-2.5 md:px-5 transition-all duration-500"
        >
          <template v-for="(item, index) in searchResults" :key="index">
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
      </template>
    </template>

    <BaseInfiniteLoading
      v-if="isNextPageAvailable"
      :is-loading="isLoadingMore"
      @load-more="loadMore"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Search | Nuxt Anime',
});

const {
  fetchSearchResults,
  loadMoreSearchResults,
  searchResults,
  isLoading,
  isNoResultsFound,
  paginationDetails,
} = useSearch();

const isLoadingMore = ref(false);
const route = useRoute();
const router = useRouter();

watch(
  () => route.query,
  (val) => {
    fetchSearchResults(val.search);
  }
);

onBeforeMount(() => {
  if (route.query?.search) fetchSearchResults(route.query?.search);
  else router.push('/');
});

const isNextPageAvailable = computed(
  () => paginationDetails.value?.has_next_page && route.query.search?.length
);

const loadMore = async () => {
  isLoadingMore.value = true;
  await loadMoreSearchResults(route.query?.search);
  isLoadingMore.value = false;
};
</script>
