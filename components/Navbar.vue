<template>
  <div
    class="absolute top-0 z-10 w-full flex justify-start gap-16 px-0 py-4 md:px-5"
  >
    <template v-for="link in links" :key="link.label">
      <nuxt-link
        :title="link.label"
        activeClass="!text-cyan-500"
        class="text-white hover:text-cyan-200"
        :to="link.path"
      >
        {{ link.label }}
      </nuxt-link>
    </template>
  </div>
</template>

<script setup>
const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shows',
    path: '/shows',
  },
  {
    label: 'Movies',
    path: '/movies',
  },
  {
    label: 'Search',
    path: '/search',
  },
];
</script>
