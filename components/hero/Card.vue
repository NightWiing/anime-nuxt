<template>
  <div
    class="flex relative min-h-52 md:min-h-[480px] bg-[length:100%_100%] bg-no-repeat bg-center"
    :style="backgroundStyles"
  >
    <div
      class="hidden md:block absolute h-full w-full bottom-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/80"
    ></div>
    <div class="w-full">
      <Transition
        appear
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform translate-y-8 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-1000 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-8 opacity-0"
      >
        <div
          v-show="heroItem"
          class="absolute bottom-0 w-full md:w-2/4 md:left-16 top-3/4 md:top-1/4 z-10 space-y-3"
        >
          <NuxtImg
            class="max-h-12 md:max-h-24 transition-transform scale-95 hover:scale-100 delay-75 duration-150"
            :src="heroItem.logo"
            :alt="heroItem.title"
            height="48 md:96"
            format="avif"
          />
          <div class="hidden md:flex items-center gap-2 md:gap-4">
            <AnimeRatings :ratings="heroItem.ratings" />
            <span
              class="block size-1 md:size-1.5 bg-gray-400 rounded-full"
            ></span>
            <label class="text-gray-400 md:font-medium text-xs md:text-base">
              {{ heroItem.aired_date }}
            </label>
            <span
              class="block size-1 md:size-1.5 bg-gray-400 rounded-full"
            ></span>
            <label class="text-gray-400 md:font-medium text-xs md:text-base">
              {{ heroItem.total_season }} Seasons
            </label>
          </div>
          <p
            class="hidden md:block text-white mt-2 md:mt-6 text-xs md:text-base transition-all delay-200 ease-in duration-500"
          >
            {{ heroItem.discription }}
          </p>
        </div>
      </Transition>
    </div>
    <div
      class="hidden md:block absolute h-8 w-full bottom-0 bg-gradient-to-t from-black"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  heroItem: {
    type: Object,
  },
});

const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img(props.heroItem.cover_image, { format: 'avif' });
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>
