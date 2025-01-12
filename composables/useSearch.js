export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;

  const searchResults = ref([]);
  const isLoading = ref(false);
  const isNoResultsFound = ref(false);
  const paginationDetails = ref(null);
  const currentPage = ref(1);
  const limit = ref(20);

  const fetchSearchResults = async (search) => {
    try {
      if (!search.length) {
        $reset();
        return;
      }
      paginationDetails.value = null;
      currentPage.value = 1;
      isLoading.value = true;
      const { data, pagination } = await $fetch(`${url}/anime`, {
        query: {
          q: search,
          page: currentPage.value,
          limit: limit.value,
        },
      });
      searchResults.value = data;
      paginationDetails.value = pagination;
      if (!searchResults.value.length) isNoResultsFound.value = true;
      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const $reset = () => {
    isNoResultsFound.value = false;
    searchResults.value = [];
    paginationDetails.value = null;
  };

  const loadMoreSearchResults = async (search) => {
    try {
      currentPage.value++;
      const { data, pagination } = await $fetch(`${url}/anime`, {
        query: {
          q: search,
          page: currentPage.value,
          limit: limit.value,
        },
      });
      data.forEach((element) => {
        searchResults.value.push(element);
      });
      paginationDetails.value = pagination;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchSearchResults,
    loadMoreSearchResults,
    searchResults,
    isLoading,
    isNoResultsFound,
    currentPage,
    limit,
    paginationDetails,
    $reset,
  };
}
