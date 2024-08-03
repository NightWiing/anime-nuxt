export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;
  const nuxt = useNuxtApp();
  const fetchTopWatchList = async (query) => {
    try {
      const { data, refresh } = await useFetch(`${url}/top/anime`, {
        query: { ...query },

        getCachedData: (key) => {
          const data = nuxt.payload.data[key] || nuxt.static.data[key];
          if (!data) {
            return;
          }

          return data;
        },
      });

      if (!data.value) {
        refresh();
      } else return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchTopWatchList };
}
