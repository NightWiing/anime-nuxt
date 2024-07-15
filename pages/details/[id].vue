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
    <div v-show="details" class="flex justify-center flex-col">
      <h1 class="text-white text-center text-5xl my-6 font-semibold">
        {{ details.title_english || details.title || details.title_japanese }}
      </h1>
      <div class="flex justify-center gap-8 mt-8">
        <div class="aspect-[10/16] max-w-80">
          <img
            class="rounded-md"
            width="400"
            height="600"
            :src="details.images.jpg && details.images.jpg.large_image_url"
            :alt="
              details.title_english || details.title || details.title_japanese
            "
          />
        </div>
        <div class="w-3/5 text-white">
          <h3 class="text-white text-3xl font-medium mb-3">Overview</h3>
          <p class="text-sm">
            {{ details.synopsis.split('[')[0] }}
          </p>

          <!-- Information -->
          <div class="grid grid-cols-2 gap-x-4 gap-y-6 mt-5">
            <div class="flex items-center gap-4">
              <h3 class="text-gray-300 text-sm">Aired</h3>
              <p class="text-sm">
                {{ details.aired.string.split('to')[0] }}
              </p>
            </div>
            <div
              v-show="details.genres && details.genres.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Genre</h3>
              <span
                v-for="genre in details.genres"
                :key="genre.name"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5"
                >{{ genre.name }}
              </span>
            </div>

            <div
              v-show="details.streaming && details.streaming.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Streaming</h3>
              <a
                v-for="stream in details.streaming.slice(0, 3)"
                :key="stream.name"
                :href="stream.url"
                target="_blank"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5"
                >{{ stream.name }}
              </a>
            </div>

            <div
              v-show="details.themes && details.themes.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Theme</h3>
              <span
                v-for="theme in details.themes"
                :key="theme.name"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5"
                >{{ theme.name }}
              </span>
            </div>

            <div class="flex items-center gap-4">
              <h3 class="text-gray-300 text-sm">Trailer</h3>
              <button
                title="trailer"
                class="text-white bg-gray-900 hover:bg-gray-900/60 transition-all delay-75 duration-100 ease-in-out p-3 rounded-full flex items-center"
                @click="openTrailerDialog"
              >
                <IconPlay class="size-5" />
              </button>
              <TrailerDialog
                v-model="isOpen"
                :link="currentLink"
                @close="resetDialog"
              />
            </div>

            <div
              v-show="details.external && details.external.length"
              class="flex flex-wrap items-center gap-4"
            >
              <h3 class="text-gray-300 text-sm">Links</h3>
              <a
                v-for="link in details.external"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="text-sm font-semibold bg-gray-900 rounded-md py-1 px-1.5"
                >{{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { fetchDetails } = useDetails();
const route = useRoute();
const details = ref(null);
const isOpen = ref(false);
const currentLink = ref('');

details.value = await fetchDetails(route.params.id);

const openTrailerDialog = () => {
  currentLink.value = details.value.trailer.embed_url;
  isOpen.value = true;
};

const resetDialog = () => {
  currentLink.value = '';
};
</script>
