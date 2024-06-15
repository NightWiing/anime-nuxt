export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;

  const fetchTopWatchList = async (query) => {
    try {
      const { data } = await useFetch(`${url}/top/anime`, {
        query: { ...query },
      });
      return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchTopWatchList };
}
