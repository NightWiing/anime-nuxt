<template>
  <div class="text-white mx-8 md:mx-16 my-6 md:my-12">
    <BaseHeader3 class="mb-4">Promos</BaseHeader3>

    <div
      v-if="videos.promo?.length"
      class="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <div
        v-for="(promo, index) in videos.promo"
        :key="index"
        class="relative flex justify-center items-center group cursor-pointer"
        @click="$emit('watchPromo', promo.trailer.embed_url)"
      >
        <img
          :src="promo.trailer.images?.medium_image_url"
          :alt="promo.title"
          class="rounded-md"
          loading="lazy"
        />
        <button
          class="absolute text-white border-2 border-white/30 bg-black/60 backdrop-blur-sm group-hover:bg-black/30 transition-all delay-75 duration-100 ease-in-out p-2.5 rounded-full flex items-center size-10"
        >
          <IconPlay class="size-5" />
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="videos.music_videos?.length"
    class="text-white mx-8 md:mx-16 my-6 md:my-12"
  >
    <BaseHeader3 class="mb-4">Music Videos</BaseHeader3>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        v-for="(music, index) in videos.music_videos"
        :key="index"
        class="relative flex justify-center items-center group cursor-pointer"
        @click="$emit('watchPromo', music.video.embed_url)"
      >
        <img
          :src="music.video.images?.medium_image_url"
          :alt="music.title"
          class="rounded-md"
          loading="lazy"
        />
        <button
          class="absolute text-white border-2 border-white/30 bg-black/60 backdrop-blur-sm group-hover:bg-black/30 transition-all delay-75 duration-100 ease-in-out p-2.5 rounded-full flex items-center size-10"
        >
          <IconPlay class="size-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['videos']);

defineEmits(['watchPromo']);
</script>
