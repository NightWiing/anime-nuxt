<template>
  <div
    ref="searchInputWrapper"
    class="flex items-center justify-center bg-black/60 backdrop-blur-lg border-2 border-white/50 rounded-full p-1 md:p-2 cursor-pointer"
  >
    <input
      ref="searchInput"
      v-model="searchParams"
      class="bg-transparent transition-all delay-100 duration-300 ease-in-out w-0 text-white text-sm focus-visible:outline-0"
      :class="{ 'w-48 px-1.5': isOpenSearch }"
      placeholder="Search"
      type="text"
      @input="redirectToSearchRouteAndFetchResults"
    />

    <IconSearch class="text-white size-5 md:size-6" @click="openSearchInput" />
  </div>
</template>

<script setup>
import { useDebounceFn, onClickOutside } from '@vueuse/core';

const isOpen = ref(false);
const router = useRouter();
const route = useRoute();
const searchParams = ref(route.query?.search || '');
const searchInputWrapper = ref(null);
const searchInput = ref(null);

watch(
  () => route.path,
  (oldVal, newVal) => {
    if (oldVal === '/' && newVal === '/search') {
      $reset();
    }
  }
);

const isOpenSearch = computed(() => isOpen.value || searchParams.value.length);

onClickOutside(searchInputWrapper, () => (isOpen.value = false));

const redirectToSearchRouteAndFetchResults = useDebounceFn(
  ($event) => {
    if ($event.target.value.trim() === '') {
      $reset();
      router.push('/');
    } else {
      router.replace({
        name: 'search',
        query: { search: $event.target.value },
      });
    }
  },
  1000,
  { maxWait: 5000 }
);

const $reset = () => {
  searchParams.value = '';
  isOpen.value = false;
};

const openSearchInput = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) searchInput.value.focus();
  else searchInput.value.blur();
};
</script>
