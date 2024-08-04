<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :breakpoints="{
      320: {
        slidesPerView: 2.5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5.5,
      },
    }"
    :space-between="10"
    :auto-height="true"
    :loop="true"
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
