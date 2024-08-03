<template>
  <div>
    <!-- Hero Section -->
    <SwiperHero v-show="$route.name !== 'search'" />
    <div
      v-show="$route.name !== 'search'"
      class="absolute h-20 w-full -left-1 bg-gradient-to-b from-black"
    ></div>

    <!-- airing movies -->
    <AnimeContent filter="airing" type="movie">
      <template #header>Airing movies</template>
    </AnimeContent>

    <!-- popular movies -->
    <AnimeContent filter="bypopularity" type="movie">
      <template #header>Popular movies</template>
    </AnimeContent>

    <!-- upcoming movies -->
    <AnimeContent filter="upcoming" type="movie">
      <template #header>Upcoming movies</template>
    </AnimeContent>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Anime movies | Nuxt Anime',
  meta: [{ name: 'description', content: 'Top movies' }],
});
</script>
