<template>
  <div>
    <!-- Hero Section -->
    <SwiperHero v-show="$route.name !== 'search'" />
    <div
      v-show="$route.name !== 'search'"
      class="absolute h-20 w-full -left-1 bg-gradient-to-b from-black"
    ></div>

    <!-- popular shows -->
    <AnimeContent filter="bypopularity" type="tv">
      <template #header>Popular shows</template>
    </AnimeContent>

    <!-- airing shows -->
    <AnimeContent filter="airing" type="tv">
      <template #header>Airing shows</template>
    </AnimeContent>

    <!-- upcoming shows -->
    <AnimeContent filter="upcoming" type="tv">
      <template #header>Upcoming shows</template>
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
