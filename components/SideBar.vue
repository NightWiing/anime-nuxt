<template>
  <div
    class="flex flex-col justify-evenly bg-black/60 p-5 border-r border-r-white/10"
  >
    <template v-for="link in links" :key="link.label">
      <nuxt-link
        :title="link.label"
        activeClass="!text-cyan-500"
        class="text-white hover:text-cyan-300"
        :to="link.path"
      >
        <component class="size-9" :is="link.icon" />
      </nuxt-link>
    </template>
  </div>
</template>

<script setup>
const IconHome = resolveComponent('IconHome');
const IconSearch = resolveComponent('IconSearch');
const IconTv = resolveComponent('IconTv');
const IconMovie = resolveComponent('IconMovie');

const links = [
  {
    label: 'Home',
    icon: IconHome,
    path: '/',
  },
  {
    label: 'Shows',
    icon: IconTv,
    path: '/shows',
  },
  {
    label: 'Movies',
    icon: IconMovie,
    path: '/movies',
  },
  {
    label: 'Search',
    icon: IconSearch,
    path: '/search',
  },
];
</script>
