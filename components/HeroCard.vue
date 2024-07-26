<template>
  <div class="flex relative min-h-60 md:min-h-96 w-full px-5 md:px-0">
    <div class="w-full relative md:pl-24 bg-black items-center">
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
          class="absolute w-full md:w-2/4 bottom-0 md:left-24 top-1/4 z-10 space-y-3"
        >
          <img
            class="max-h-12 md:max-h-24 transition-transform scale-95 hover:scale-100 delay-75 duration-150"
            :src="heroItem.logo"
            :alt="heroItem.title"
          />
          <div class="flex items-center gap-2 md:gap-4">
            <Ratings :ratings="heroItem.ratings" />
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
            class="text-white mt-2 md:mt-6 text-xs md:text-base transition-all delay-200 ease-in duration-500"
          >
            {{ heroItem.discription }}
          </p>
        </div>
      </Transition>
    </div>

    <div class="absolute right-0 h-full w-full md:w-3/5">
      <div
        class="absolute h-full w-full bottom-0 md:-left-1 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80"
      ></div>
      <img
        class="w-full h-full"
        :src="heroItem.cover_image"
        :alt="heroItem.title"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  heroItem: {
    type: Object,
  },
});
</script>
