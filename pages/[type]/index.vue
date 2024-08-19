<template>
  <div>
    <!-- Hero Section -->
    <SwiperHero />

    <template v-for="(query, index) in listQuery" :key="index">
      <AnimeContent :filter="query.filter" :type="query.type">
        <template #header>
          <BaseHeader3>{{ query.title }}</BaseHeader3>
        </template>
      </AnimeContent>
    </template>
  </div>
</template>

<script setup>
import List from '@/static/list.json';

const route = useRoute();

useHead({
  title: `Anime ${
    route.params.type == 'movie' ? 'movies' : 'shows'
  } | Nuxt Anime`,
  meta: [{ name: 'description', content: 'Top movies' }],
});

const listQuery = computed(() => {
  return List[route.params.type];
});
</script>
