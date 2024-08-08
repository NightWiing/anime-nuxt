<template>
  <div>
    <!-- Hero Section -->
    <SwiperHero v-show="$route.name !== 'search'" />

    <!-- airing movies -->
    <AnimeContent filter="airing" type="movie">
      <template #header>
        <BaseHeader3>Airing movies</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- popular movies -->
    <AnimeContent filter="bypopularity" type="movie">
      <template #header>
        <BaseHeader3>Popular movies</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- upcoming movies -->
    <AnimeContent filter="upcoming" type="movie">
      <template #header>
        <BaseHeader3>Upcoming movies</BaseHeader3>
      </template>
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
