<template>
  <Transition
    appear
    enter-active-class="transition duration-1000 ease-out"
    enter-from-class="transform translate-y-8 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-1000 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-8 opacity-0"
  >
    <div
      ref="header"
      v-show="details"
      class="flex justify-center flex-col mt-16"
    >
      <DetailsMain :details="details" :main-title="mainTitle" />

      <DetailsCharacterList :characters="characterList" />

      <AnimePromoSection
        v-if="isVideosExists"
        :videos="videos"
        @watch-promo="openTrailerDialog"
      />
    </div>
  </Transition>
</template>

<script setup>
const { fetchDetails, fetchCharacters, fetchVideos } = useDetails();
const route = useRoute();
const details = ref(null);
const characters = ref([]);
const videos = ref(null);
const header = ref(null);
const isOpen = ref(false);
const currentLink = ref('');

details.value = await fetchDetails(route.params.id);

characters.value = await fetchCharacters(route.params.id);

videos.value = await fetchVideos(route.params.id);

const mainTitle = computed(() => {
  return (
    details.value?.title_english ||
    details.value?.title ||
    details.value?.title_japanese
  );
});

useHead({
  title: `${mainTitle.value} | Nuxt Anime`,
});

const characterList = computed(() => {
  return characters.value?.map((c) => c.character) || [];
});

const isVideosExists = computed(() => {
  return videos.value?.promo?.length || videos.value?.music_videos?.length;
});

const openTrailerDialog = (url) => {
  header.value.scrollIntoView({ behavior: 'smooth' });
  currentLink.value = url;
  isOpen.value = true;
  const myElement = document.getElementsByTagName('body')[0];
  myElement.style.overflowY = 'hidden';
};

const resetDialog = () => {
  currentLink.value = '';
  const myElement = document.getElementsByTagName('body')[0];
  myElement.style.overflowY = 'auto';
};
</script>
