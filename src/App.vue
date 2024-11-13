<script setup>
import { computed, ref, onMounted } from "vue";
import data from "./data/albums.json";
import Album from "./components/Album.vue";
import Modal from "./components/Modal.vue";
import FilterGenre from "./components/FilterGenre.vue";
import Search from "./components/Search.vue";

const selectedAlbum = ref(null);
const albums = ref(data.albums.sort((a, b) => b.year - a.year));
const allGenre = ref([]);
const selectedGenre = ref([]);
const searchInputValue = ref("");

const openAlbumModal = (_, album) => {
  selectedAlbum.value = selectedAlbum.value === album ? null : album;
};

const getAllGenres = (albumsList) => {
  const genres = [];
  albumsList.forEach((album) => {
    if (!genres.includes(album.genre)) genres.push(album.genre);
  });
  allGenre.value = genres;
};

const selectGenre = (genre) => {
  if (genre !== null) {
    if (!selectedGenre.value.includes(genre)) selectedGenre.value.push(genre);
  } else {
    selectedGenre.value = [];
  }
  applyFilters();
};

const searchOnList = (inputValue) => {
  searchInputValue.value = inputValue;
  applyFilters();
};

const filteredList = computed(() => {
  let filtered = [...albums.value];

  if (selectedGenre.value.length) {
    filtered = filtered.filter((album) =>
      selectedGenre.value.includes(album.genre)
    );
  }

  
  if (searchInputValue.value.length) {
    const lowerCaseQuery = searchInputValue.value.toLowerCase();
    filtered = filtered.filter(
      (album) =>
        album.name.toLowerCase().includes(lowerCaseQuery) ||
        album.artist.toLowerCase().includes(lowerCaseQuery)
    );
  }
  // can have check if filtered has length or not in order to display "no result"
  return filtered;
});

const applyFilters = () => {
  filteredList.value;
};

onMounted(() => {
  getAllGenres(albums.value);
});
</script>

<template>
  <div
    class="h-screen w-full flex flex-col gap-3 bg-gradient-to-br from-teal-500 to-slate-700 overflow-auto p-5"
  >
    <h1 class="text-3xl font-bold text-white">Albums</h1>

    <div
      class="flex lg:flex-row sm:flex-col gap-2 bg-white shadow p-6 dark:bg-slate-800 rounded-md mt-4"
    >
      <FilterGenre :allGenre="allGenre" @selectGenre="selectGenre" />
      <Search @searchOnList="searchOnList" />
    </div>

    <div
      v-if="filteredList"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-3"
    >
      <div
        v-for="(album, index) in filteredList"
        :key="index"
        class="cursor-pointer"
      >
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
