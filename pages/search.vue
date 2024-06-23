<template>
  <div class="font-reddit">
    <input
      type="text"
      placeholder="Search..."
      v-model="searchParam"
      class="bg-gray-900 px-3 py-4 w-full text-white text-lg font-medium focus-visible:outline-none"
      @input="getSearchResultsOnInput($event)"
    />

    <div v-if="!searchParam.length" class="flex justify-center p-8">
      <p class="text-2xl font-medium text-white">
        Search for your favorite anime...
      </p>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center">
      <BaseLoader class="size-24" fill="#06b6d4" />
    </div>
    <template v-else>
      <div
        v-if="isNoResultsFound"
        class="flex justify-center text-white font-medium text-xl mt-10"
      >
        No results found, try another keyword...
      </div>
      <div v-else class="grid grid-cols-5 gap-x-2 gap-y-6 p-8">
        <template v-for="(item, index) in searchResults" :key="index">
          <ContentCard :item="item" />
        </template>
      </div>
    </template>
    <div
      v-if="paginationDetails && paginationDetails.has_next_page"
      class="flex justify-center mt-4 mb-8"
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
  if (event.target.value.length) {
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
