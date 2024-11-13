<script setup>
defineProps({
  name: String,
  year: Number,
  artist: String,
  genre: String,
  cover: String | null,
});
</script>

<template>
  <div
    class="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
    @click.self="$emit('close', $event)"
  >
    <div
      class="bg-gray-200 p-6 rounded-lg flex w-2/3 gap-2 shadow-md text-black relative"
    >
      <button
        @click="$emit('close', $event)"
        class="absolute top-2 w-8 h-8 right-2 text-gray-600 hover:text-black"
      >
        &times;
      </button>
      <img
        class="bg-gray-50 w-1/3"
        :src="cover !== null ? cover : 'https://placehold.co/300x300/png'"
        :alt="name"
      />
      <div class="flex flex-col w-2/3">
        <div class="flex gap-2 items-center mb-2 w-2/3"></div>
        <h2 class="text-xl font-bold mb-2">
          {{ name }}
          <span
            class="ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
          >
            <span class="relative text-white">{{ genre }}</span>
          </span>
        </h2>
        <p><strong>Artist:</strong> {{ artist }}</p>
        <p><strong>Year:</strong> {{ year }}</p>
      </div>
    </div>
  </div>
</template>