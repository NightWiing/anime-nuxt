<template>
  <div class="aspect-[6/9] rounded-sm relative overflow-hidden group/card">
    <img
      class="rounded-sm absolute h-full group-hover/card:transition-transform ease-in-out group-hover/card:-translate-y-1 group-hover/card:z-10 group-hover/card:scale-[1.01] delay-100 duration-300"
      loading="lazy"
      height="600"
      width="400"
      :alt="imageAlt"
      :src="imageUrl"
    />
    <span
      class="px-2 py-4 absolute text-white text-center h-full w-full transition-opacity ease-in-out delay-100 duration-300 bg-black/90 group-hover/card:z-20 group-hover/card:opacity-100 opacity-0"
    >
      <label>
        {{ imageAlt }}
      </label>
      <div class="flex items-center justify-evenly mt-3">
        <AnimeRatings :ratings="item.score / 2" /> |
        <label class="text-sm">Source: {{ item.source }}</label>
      </div>
      <p class="text-sm line-clamp-[10] mt-3">{{ item.synopsis }}</p>
    </span>
  </div>
</template>

<script setup>
const props = defineProps(['item']);

const imageAlt = computed(
  () =>
    props.item.title_english || props.item.title_japanese || props.item.title
);

const imageUrl = computed(() => props.item.images?.webp?.large_image_url);
</script>
