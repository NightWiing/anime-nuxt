<template>
  <div class="bg-black h-full">
    <div id="default" class="overflow-x-hidden flex-1 relative font-reddit">
      <BaseAppNavbar ref="navbar" />
      <slot />
    </div>
    <BaseAppFooter v-show="$route.name !== 'search'" />
  </div>
</template>

<script setup>
const navbar = ref(null);

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > 10) {
      navbar.value.isSticky = true;
    } else {
      navbar.value.isSticky = false;
    }
  };
});
</script>
