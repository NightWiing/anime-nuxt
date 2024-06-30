<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :slides-per-view="5.5"
    :space-between="10"
    :auto-height="true"
  >
    <SwiperSlide
      class="max-w-64"
      v-for="(item, index) in carouselItems"
      :key="index"
    >
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
