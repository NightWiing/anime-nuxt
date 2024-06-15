<template>
  <Swiper
    :modules="[SwiperPagination, SwiperAutoplay]"
    :autoplay="{
      delay: 5000,
    }"
    :slides-per-view="1"
    :loop="true"
  >
    <SwiperSlide v-for="(item, index) in HeroData.heroItems" :key="index">
      <HeroCard :hero-item="item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import HeroData from '@/static/data.json';
</script>
