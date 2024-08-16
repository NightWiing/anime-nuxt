<template>
  <div
    v-show="isOpen"
    class="backdrop-blur-sm bg-black/30 z-20 h-full w-full fixed inset-0"
  >
    <button
      title="trailer"
      class="absolute z-50 right-2 md:right-4 top-2 md:top-4 text-white bg-gray-900 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out p-3 rounded-full flex items-center"
      @click="closeDialog"
    >
      <IconClose class="size-5" />
    </button>
    <div
      class="z-10 w-auto md:max-w-7xl flex justify-center items-center bg-black fixed inset-0 m-6 md:m-32"
    >
      <iframe
        v-if="link"
        width="1200"
        height="600"
        :src="link"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <label v-else class="text-white text-lg">No trailer available</label>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['close']);

const props = defineProps({
  link: {
    type: String,
  },
});

const isOpen = defineModel();
const youtubeLink = ref(props.link);

const closeDialog = () => {
  isOpen.value = false;
  emits('close', false);
};
</script>
