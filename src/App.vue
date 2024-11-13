<script setup>
import { computed } from "vue";
import data from "./data/albums.json";
import Album from "./components/Album.vue";

const albums = computed(() => {
  return data.albums.sort((a, b) => b.year - a.year);
});
</script>

<template>
  <div
    class="h-screen w-full flex flex-col gap-3 bg-gradient-to-br from-teal-500 to-slate-700 overflow-auto p-5"
  >
    <h1 class="text-3xl font-bold text-white">Albums</h1>

    <div
      v-if="albums"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-3"
    >
      <div v-for="(album, index) in albums" :key="index" class="cursor-pointer">
        <Album :albumItem="album" />
      </div>
    </div>
  </div>
</template>
