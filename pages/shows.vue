<template>
  <div>
    <!-- Hero Section -->
    <SwiperHero v-show="$route.name !== 'search'" />

    <!-- airing shows -->
    <AnimeContent filter="airing" type="tv">
      <template #header>
        <BaseHeader3>Airing shows</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- popular shows -->
    <AnimeContent filter="bypopularity" type="tv">
      <template #header>
        <BaseHeader3>Popular shows</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- upcoming shows -->
    <AnimeContent filter="upcoming" type="tv">
      <template #header>
        <BaseHeader3>Upcoming shows</BaseHeader3>
      </template>
    </AnimeContent>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Anime shows | Nuxt Anime',
  meta: [{ name: 'description', content: 'Top shows' }],
});
</script>
