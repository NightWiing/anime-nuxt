export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;

  const fetchDetails = async (id) => {
    try {
      const { data } = await useFetch(`${url}/anime/${id}/full`);
      return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCharacters = async (id) => {
    try {
      const { data } = await useFetch(`${url}/anime/${id}/characters`);
      return data.value?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchDetails, fetchCharacters };
}
