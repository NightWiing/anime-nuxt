<template>
  <Swiper
    :modules="[SwiperPagination, SwiperEffectFade]"
    :effect="`fade`"
    :autoplay="{
      delay: 10000,
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
import HeroData from '@/static/hero-items.json';
</script>
