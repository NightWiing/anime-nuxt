<template>
  <div ref="element" />

  <div class="flex justify-center items-center my-6">
    <BaseSpinnerLoader class="size-6" />
  </div>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['loadMore']);
const element = ref(null);

useIntervalFn(() => {
  const { top } = element.value?.getBoundingClientRect();
  const arrivedAtBottom = top - window.innerHeight;
  if (arrivedAtBottom < 400 && !props.isLoading) {
    emits('loadMore');
  }
}, 500);
</script>
