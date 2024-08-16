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
      <h1
        class="text-white text-center text-2xl md:text-5xl my-6 font-semibold"
      >
        {{ mainTitle }}
      </h1>
      <div
        class="flex flex-col md:flex-row md:gap-8 lg:gap-16 md:mt-8 mx-8 lg:mx-16 mb-10"
      >
        <div class="aspect-[10/16] w-full lg:w-1/4">
          <img
            class="rounded-md w-full md:max-w-80"
            width="400"
            height="600"
            :src="mainImage"
            :alt="mainTitle"
          />
        </div>
        <div class="text-white w-full lg:w-3/4">
          <h3 class="text-3xl font-medium mb-3">Overview</h3>
          <p class="text-sm">
            {{ mainDetails }}
          </p>

          <!-- Information -->
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-x-0 md:gap-x-4 gap-y-8 md:gap-y-6 mt-12"
          >
            <div class="flex items-center gap-4">
              <h3 class="text-gray-300 text-sm">Aired</h3>
              <p class="text-sm">
                {{ airedDate }}
              </p>
            </div>
            <div
              v-if="genres?.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Genre</h3>
              <span
                v-for="genre in genres"
                :key="genre.name"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out"
                >{{ genre.name }}
              </span>
            </div>

            <div
              v-if="streamingLinks?.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Streaming</h3>
              <a
                v-for="stream in streamingLinks"
                :key="stream.name"
                :href="stream.url"
                target="_blank"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out"
                >{{ stream.name }}
              </a>
            </div>

            <div
              v-if="themes?.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Theme</h3>
              <span
                v-for="theme in themes"
                :key="theme.name"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out"
                >{{ theme.name }}
              </span>
            </div>

            <div class="flex items-center gap-4">
              <h3 class="text-gray-300 text-sm">Trailer</h3>
              <button
                title="trailer"
                class="text-white bg-gray-900 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out p-2.5 rounded-full flex items-center"
                @click="openTrailerDialog(details.trailer.embed_url)"
              >
                <IconPlay class="size-5" />
              </button>

              <AnimePromoDialog
                v-model="isOpen"
                :link="currentLink"
                @close="resetDialog"
              />
            </div>

            <div
              v-if="externalLinks?.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Links</h3>
              <a
                v-for="link in externalLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out"
                >{{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <DetailsCharacters :characters="characterList" />

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
const isOpen = ref(false);
const currentLink = ref('');
const header = ref(null);

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

const mainImage = computed(() => {
  return details.value?.images?.webp?.large_image_url;
});

const mainDetails = computed(() => {
  return details.value?.synopsis?.split('[')[0];
});

const airedDate = computed(() => {
  return details.value?.aired?.string?.split('to')[0];
});

const genres = computed(() => {
  return details.value?.genres;
});

const streamingLinks = computed(() => {
  return details.value?.streaming?.slice(0, 3);
});

const themes = computed(() => {
  return details.value?.themes;
});

const externalLinks = computed(() => {
  return details.value?.external.slice(0, 4);
});

const characterList = computed(() => {
  return characters.value?.map((c) => c.character);
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
