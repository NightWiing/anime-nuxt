<template>
  <div class="relative">
    <!-- Hero Section -->

    <SwiperHero />

    <!-- popular shows  -->
    <AnimeContent filter="bypopularity" type="tv">
      <template #header>
        <BaseHeader3>Popular shows</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- popular movies -->
    <AnimeContent filter="bypopularity" type="movie">
      <template #header>
        <BaseHeader3>Popular movies</BaseHeader3>
      </template>
    </AnimeContent>

    <!-- popular tv special -->
    <AnimeContent filter="bypopularity" type="tv_special">
      <template #header>
        <BaseHeader3>Popular tv special</BaseHeader3>
      </template>
    </AnimeContent>
  </div>
</template>

<script setup>
useHead({
  title: 'Home | Nuxt Anime',
  meta: [{ name: 'description', content: 'Anime list' }],
});
</script>
