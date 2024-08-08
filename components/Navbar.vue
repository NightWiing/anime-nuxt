<template>
  <div
    class="fixed top-0 z-10 bg-black md:bg-transparent w-full flex justify-start md:gap-16 px-2 py-2 md:py-4 md:px-5 transition-all delay-100 duration-150 ease-in"
    :class="[isSticky ? 'md:bg-black/80 backdrop-blur-xl' : '']"
  >
    <template v-for="link in links" :key="link.label">
      <nuxt-link
        :title="link.label"
        activeClass="!text-cyan-500"
        class="text-white hover:text-cyan-200 hidden md:inline"
        :to="link.path"
      >
        {{ link.label }}
      </nuxt-link>
    </template>
    <div class="md:hidden">
      <IconHamburger
        class="text-white size-10"
        @click="isOpenDrawer = !isOpenDrawer"
      />
      <MobileDrawer ref="dropdown" v-model="isOpenDrawer" :links="links" />
    </div>
  </div>
</template>

<script setup>
const isSticky = ref(false);
const isOpenDrawer = ref(false);
const dropdown = ref(null);

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

onClickOutside(dropdown, () => (isOpenDrawer.value = false));

defineExpose({
  isSticky,
});
</script>
