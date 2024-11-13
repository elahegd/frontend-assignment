<script setup>
defineProps({
  albumItem: {
    name: String,
    year: Number,
    artist: String,
  },
});
</script>

<template>
  <div
    class="flex items-center gap-2 bg-white text-black p-4 rounded-lg shadow-lg transform transition duration-200 hover:scale-105 cursor-pointer"
  >
    <div class="flex flex-col w-2/3">
      <h2 class="text-lg font-semibold truncate">{{ albumItem.name }}</h2>
      <p class="text-sm text-grey-500">
        {{ albumItem.year }} - {{ albumItem.artist }}
      </p>
    </div>
  </div>
</template>
