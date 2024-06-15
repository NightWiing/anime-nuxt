export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;

  const searchResults = ref([]);
  const isLoading = ref(false);
  const isNoResultsFound = ref(false);

  const deBounce = (func) => {
    let timeout;

    return function (...args) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(this, args);
      }, 500);
    };
  };

  const search = async (search) => {
    try {
      isLoading.value = true;
      const { data } = await useFetch(`${url}/anime`, {
        query: { type: 'tv', q: search, page: 1 },
      });
      searchResults.value = data.value.data;
      if (!searchResults.value.length) isNoResultsFound.value = true;
      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const fetchSearchResults = deBounce(search);

  return { fetchSearchResults, searchResults, isLoading, isNoResultsFound };
}
