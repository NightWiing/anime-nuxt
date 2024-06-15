<template>
  <button
    v-show="isNextSlide"
    class="text-white bg-black/35 absolute right-0 top-1/2 -translate-y-1/2 z-10 h-48 px-2.5 rounded-l-md group-hover:opacity-100 opacity-0 transition-opacity ease-in"
    @click="swiper.slideNext()"
  >
    <IconNext class="size-8 text-white" />
  </button>
  <button
    v-show="isPrevSlide"
    class="text-white bg-black/35 absolute -left-24 top-1/2 -translate-y-1/2 z-10 h-48 px-2.5 rounded-r-md group-hover:opacity-100 opacity-0 transition-opacity ease-in"
    @click="swiper.slidePrev()"
  >
    <IconPrevious class="size-8 text-white" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const swiper = useSwiper();

const isNextSlide = computed(() => {
  return (
    swiper.value.activeIndex + Math.floor(swiper.value.params?.slidesPerView) <
    swiper.value.slides?.length
  );
});

const isPrevSlide = computed(() => {
  return swiper.value.activeIndex !== 0;
});
</script>
