<script setup>
defineProps({
  albumItem: {
    name: String,
    year: Number,
    artist: String,
    cover: String | null,
  },
});
</script>

<template>
  <div
    class="flex items-center gap-2 bg-white text-black p-4 rounded-lg shadow-lg transform transition duration-200 hover:scale-105 cursor-pointer"
  >
    <img
      class="rounded-full bg-gray-50 w-1/3"
      :src="
        albumItem.cover !== null
          ? albumItem.cover
          : 'https://placehold.co/300x300/png'
      "
      :alt="albumItem.name"
    />
    <div class="flex flex-col w-2/3">
      <h2 class="text-lg font-semibold truncate">{{ albumItem.name }}</h2>
      <p class="text-sm text-grey-500">
        {{ albumItem.year }} - {{ albumItem.artist }}
      </p>
    </div>
  </div>
</template>
