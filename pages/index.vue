<template>
  <div class="relative">
    <!-- Hero Section -->

    <SwiperHero />

    <div class="absolute h-20 w-full -left-1 bg-gradient-to-b from-black"></div>

    <!-- popular shows  -->
    <AnimeContent filter="bypopularity" type="tv">
      <template #header>Popular shows</template>
    </AnimeContent>

    <!-- popular movies -->
    <AnimeContent filter="bypopularity" type="movie">
      <template #header>Popular movies</template>
    </AnimeContent>

    <!-- popular tv special -->
    <AnimeContent filter="bypopularity" type="tv_special">
      <template #header>Popular tv special</template>
    </AnimeContent>
  </div>
</template>
