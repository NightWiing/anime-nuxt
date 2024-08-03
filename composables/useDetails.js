export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;
  const nuxt = useNuxtApp();
  const fetchDetails = async (id) => {
    try {
      const { data } = await useFetch(`${url}/anime/${id}/full`, {
        getCachedData: (key) => {
          const data = nuxt.payload.data[key] || nuxt.static.data[key];
          if (!data) {
            return;
          }

          return data;
        },
      });

      return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCharacters = async (id) => {
    try {
      const { data } = await useFetch(`${url}/anime/${id}/characters`, {
        getCachedData: (key) => {
          const data = nuxt.payload.data[key] || nuxt.static.data[key];
          if (!data) {
            return;
          }

          return data;
        },
      });

      return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchDetails, fetchCharacters };
}
