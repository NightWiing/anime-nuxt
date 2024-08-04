export default function () {
  const url = useRuntimeConfig().public.API_BASE_URL;
  const nuxt = useNuxtApp();
  const route = useRoute();

  const paginationDetails = ref(null);
  const contentList = ref([]);
  const currentPage = ref(1);
  const limit = ref(20);

  const page = computed(() => {
    switch (route.params.type) {
      case 'tv':
        return 'Tv shows';
      case 'movie':
        return 'Movies';
      case 'tv_special':
        return 'Tv special';
      default:
        break;
    }
  });

  const title = computed(() => {
    switch (route.params.filter) {
      case 'bypopularity':
        return 'Popular';
      case 'upcoming':
        return 'Upcoming';
      case 'favorite':
        return 'Favorite';
      case 'airing':
        return 'Airing';
      default:
        break;
    }
  });

  const fetchSeeMoreList = async () => {
    try {
      const { data, refresh } = await useFetch(`${url}/top/anime`, {
        query: {
          filter: route.params.filter,
          type: route.params.type,
          sfw: false,
          page: currentPage.value,
          limit: limit.value,
        },

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
        contentList.value = data.value?.data;
        paginationDetails.value = data.value?.pagination;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreResults = async () => {
    try {
      currentPage.value++;
      const { data, pagination } = await $fetch(`${url}/top/anime`, {
        query: {
          filter: route.params.filter,
          type: route.params.type,
          rating: 'g',
          sfw: false,
          page: currentPage.value,
          limit: limit.value,
        },
      });
      data.forEach((element) => {
        contentList.value.push(element);
      });
      paginationDetails.value = pagination;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchSeeMoreList,
    loadMoreResults,
    paginationDetails,
    contentList,
    page,
    title,
  };
}
