<template>
  <div>
    <input
      type="text"
      placeholder="Search..."
      v-model="searchParam"
      class="bg-gray-900 px-3 py-4 w-full text-white text-lg font-medium focus-visible:outline-none"
      @input="getSearchResultsOnInput($event)"
    />

    <div v-if="!searchParam.length" class="flex justify-center p-4 md:p-8">
      <p class="md:text-2xl font-medium text-white">
        Search for your favorite anime...
      </p>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center">
      <BaseLoader class="size-24" fill="#06b6d4" />
    </div>
    <template v-else>
      <div
        v-if="isNoResultsFound"
        class="flex justify-center text-white font-medium md:text-xl mt-5 md:mt-10"
      >
        No results found, try another keyword...
      </div>
      <div
        v-else
        class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3 md:gap-y-6 p-4 md:p-8 transition-all duration-500"
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
              <ContentCard :item="item" />
            </nuxt-link>
          </Transition>
        </template>
      </div>
    </template>
    <div
      v-if="paginationDetails && paginationDetails.has_next_page"
      class="flex justify-center mt-4 mb-24 md:mb-8"
    >
      <button
        class="bg-cyan-500 cursor-pointer py-2 px-4 flex items-center text-sm text-white rounded-full"
        @click="loadMore"
      >
        <label class="cursor-pointer">Load More</label>
        <BaseSpinnerLoader v-if="isLoadingMore" class="size-4 ml-2" />
      </button>
    </div>
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
  $reset,
} = useSearch();

const searchParam = ref('');
const isLoadingMore = ref(false);

const getSearchResultsOnInput = (event) => {
  if (event.target.value.length > 2) {
    fetchSearchResults(event.target.value);
  } else {
    $reset();
  }
};

const loadMore = async () => {
  isLoadingMore.value = true;
  await loadMoreSearchResults(searchParam.value);
  isLoadingMore.value = false;
};
</script>
