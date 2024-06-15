<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :slides-per-view="4.5"
    :space-between="25"
    :auto-height="true"
  >
    <SwiperSlide v-for="(item, index) in carouselItems" :key="index">
      <slot name="carousel" :item="item" />
    </SwiperSlide>
    <SwiperControls />
  </Swiper>
</template>

<script setup>
defineProps({
  carouselItems: {
    type: Array,
    default: () => [],
  },
});
</script>
