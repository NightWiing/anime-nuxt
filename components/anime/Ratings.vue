<template>
  <div class="grid grid-cols-5 w-20 md:w-40 text-white">
    <template v-for="(rating, index) in Math.trunc(ratings)" :key="index">
      <IconStar
        class="size-4 md:size-8 text-cyan-500 transition-transform scale-95 hover:scale-125 delay-75 duration-150"
      />
    </template>
    <IconHalfStar
      v-if="remainingRatings % 1 > 0"
      class="size-4 md:size-8 text-cyan-500 transition-transform scale-95 hover:scale-125 delay-75 duration-150"
    />

    <template
      v-for="(remain, index) in Math.trunc(remainingRatings)"
      :key="index"
    >
      <IconOutlineStar
        class="size-4 md:size-8 text-cyan-500 transition-transform scale-95 hover:scale-125 delay-75 duration-150"
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  ratings: {
    type: Number,
    default: 0,
  },
});

const maxRatings = 5;

const remainingRatings = computed(() => maxRatings - props.ratings);
</script>
