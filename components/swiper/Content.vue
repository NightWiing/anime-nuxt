<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :slides-per-view="5.5"
    :space-between="10"
    :auto-height="true"
    :loop="true"
  >
    <SwiperSlide
      class="max-w-64"
      v-for="(item, index) in carouselItems"
      :key="index"
    >
      <nuxt-link :to="`/details/${item.mal_id}`">
        <slot name="carousel" :item="item" />
      </nuxt-link>
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
