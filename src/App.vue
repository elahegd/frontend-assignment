<script setup>
import { computed, ref } from "vue";
import data from "./data/albums.json";
import Album from "./components/Album.vue";
import Modal from "./components/Modal.vue";

const selectedAlbum = ref(null);

const albums = computed(() => {
  return data.albums.sort((a, b) => b.year - a.year);
});

const openAlbumModal = (_, album) => {
  selectedAlbum.value = selectedAlbum.value === album ? null : album;
}
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
        <Album :albumItem="album" @open="openAlbumModal" />
      </div>
    </div>

    <Modal
      v-if="selectedAlbum"
      :name="selectedAlbum?.name"
      :artist="selectedAlbum?.artist"
      :year="selectedAlbum?.year"
      :genre="selectedAlbum?.genre"
      :cover="selectedAlbum?.cover"
      @close="openAlbumModal"
    />

  </div>
</template>
