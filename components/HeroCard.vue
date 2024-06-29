<template>
  <div class="flex relative min-h-96 w-full">
    <div class="w-full relative pl-24 bg-black items-center">
      <div class="absolute w-2/4 left-24 top-1/4 z-10 space-y-3">
        <img
          class="max-h-24 transition-transform scale-95 hover:scale-100 delay-75 duration-150"
          :src="heroItem.logo"
          :alt="heroItem.title"
        />
        <div class="flex items-center gap-4">
          <Ratings :ratings="heroItem.ratings" />
          <span class="block size-1.5 bg-gray-400 rounded-full"></span>
          <label class="text-gray-400 font-medium">
            {{ heroItem.aired_date }}
          </label>
          <span class="block size-1.5 bg-gray-400 rounded-full"></span>
          <label class="text-gray-400 font-medium">
            {{ heroItem.total_season }} Seasons
          </label>
        </div>
        <p
          class="text-white mt-6 transition-all delay-200 ease-in duration-500"
        >
          {{ heroItem.discription }}
        </p>
      </div>
    </div>
    <div class="absolute right-0 h-full w-3/5">
      <div
        class="absolute h-full w-full -left-1 bg-gradient-to-r from-black"
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
