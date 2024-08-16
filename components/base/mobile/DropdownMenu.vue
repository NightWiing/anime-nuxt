<template>
  <div
    v-show="isOpen"
    class="absolute top-12 bg-gray-800/60 backdrop-blur-xl shadow-xl rounded-md min-w-40"
  >
    <div class="flex flex-col p-4 space-y-4">
      <template v-for="link in links" :key="link.label">
        <nuxt-link
          :title="link.label"
          activeClass="!text-cyan-500"
          class="text-white hover:text-cyan-200"
          :to="link.path"
          @click="isOpen = false"
        >
          {{ link.label }}
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps(['links']);
const isOpen = defineModel();
</script>
