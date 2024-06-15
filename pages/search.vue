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
      <BaseLoader class="size-24" />
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
  </div>
</template>

<script setup>
const { fetchSearchResults, searchResults, isLoading, isNoResultsFound } =
  useSearch();

const searchParam = ref('');

const getSearchResultsOnInput = (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length) {
    fetchSearchResults(event.target.value);
  } else {
    isNoResultsFound.value = false;
    searchResults.value = [];
  }
};
</script>
