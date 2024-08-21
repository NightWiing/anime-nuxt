<template>
  <div class="bg-black h-full">
    <div class="overflow-x-hidden flex-1 relative font-reddit">
      <BaseAppNavbar ref="navbar" />
      <slot />
    </div>
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

  if (window.scrollY > 10) {
    navbar.value.isSticky = true;
  } else {
    navbar.value.isSticky = false;
  }
});
</script>
