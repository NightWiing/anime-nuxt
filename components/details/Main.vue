<template>
  <div class="md:gap-4 lg:gap-8 mt-3 md:mt-6 mx-8 lg:mx-16">
    <div class="mb-4 flex justify-between">
      <div>
        <h1 class="text-white text-2xl md:text-4xl font-medium flex">
          {{ mainTitle }}
        </h1>
        <div class="mt-2 flex gap-6">
          <div class="flex items-center gap-2">
            <h3 class="text-gray-300 text-sm">Aired</h3>
            <span
              class="block size-1 md:size-1.5 bg-gray-400 rounded-full"
            ></span>
            <p class="text-sm text-white">
              {{ airedDate }}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <h3 class="text-gray-300 text-sm">Ratings</h3>
            <span
              class="block size-1 md:size-1.5 bg-gray-400 rounded-full"
            ></span>
            <AnimeRatings :ratings="details.score / 2" />
          </div>
        </div>
      </div>

      <!-- Streaming services -->
      <div class="flex gap-2">
        <a
          v-for="stream in streamingLinks"
          :key="stream.name"
          :href="stream.url"
          target="_blank"
          class="rounded-md flex"
        >
          <img
            class="max-w-32 rounded-md"
            :src="
              stream.name === 'Netflix'
                ? '/images/netflix.jpg'
                : '/images/crunchyroll.jpg'
            "
            :alt="stream.name"
          />
        </a>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-full lg:w-1/4 flex aspect-[10/16]">
        <img
          class="rounded-md w-full"
          width="400"
          height="600"
          :src="mainImage"
          :alt="mainTitle"
          loading="lazy"
        />
      </div>
      <div class="w-full lg:w-3/4 flex group cursor-pointer">
        <iframe
          class="rounded-md"
          :src="details.trailer.embed_url"
          width="100%"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex flex-wrap gap-2 my-4">
        <span
          v-for="genre in genres"
          :key="genre.name"
          class="text-xs font-medium rounded-full border border-white text-white hover:bg-gray-950 cursor-pointer py-1.5 px-2 transition-all delay-75 duration-100 ease-in-out"
          >{{ genre.name }}
        </span>

        <span
          v-for="theme in themes"
          :key="theme.name"
          class="text-xs font-medium rounded-full border border-white text-white hover:bg-gray-950 cursor-pointer py-1.5 px-2 transition-all delay-75 duration-100 ease-in-out"
          >{{ theme.name }}
        </span>
      </div>
      <p class="text-sm text-white">
        {{ mainDetails }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['details', 'mainTitle']);

const mainImage = computed(() => {
  return props.details?.images?.webp?.large_image_url;
});

const mainDetails = computed(() => {
  return props.details?.synopsis?.split('[')[0];
});

const airedDate = computed(() => {
  return props.details?.aired?.string?.split('to')[0];
});

const genres = computed(() => {
  return props.details?.genres || [];
});

const streamingLinks = computed(() => {
  return (
    props.details.streaming.filter(
      (s) => s.name === 'Netflix' || s.name === 'Crunchyroll'
    ) || []
  );
});

const themes = computed(() => {
  return props.details?.themes || [];
});
</script>
