export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;
  const nuxt = useNuxtApp();
  const fetchDetails = async (id) => {
    try {
      const { data, refresh } = await useFetch(`${url}/anime/${id}/full`, {
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
      } else {
        return data.value?.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCharacters = async (id) => {
    try {
      const { data, refresh } = await useFetch(
        `${url}/anime/${id}/characters`,
        {
          getCachedData: (key) => {
            const data = nuxt.payload.data[key] || nuxt.static.data[key];
            if (!data) {
              return;
            }

            return data;
          },
        }
      );

      if (!data.value) {
        refresh();
      } else {
        return data.value?.data.slice(0, 25);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideos = async (id) => {
    try {
      const { data, refresh } = await useFetch(`${url}/anime/${id}/videos`, {
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
      } else {
        return {
          promo: data.value?.data?.promo,
          music_videos: data.value?.data?.music_videos,
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchDetails, fetchCharacters, fetchVideos };
}
