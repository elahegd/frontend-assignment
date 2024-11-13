<script setup>
import { ref, defineEmits } from "vue";

const selected = ref([]);
defineProps(['allGenre']);
const emit = defineEmits(['selectGenre']);

const selectGenre = (genre) => {
    emit('selectGenre', genre);
    selected.value.push(genre);
}

const resetFilter = () => {
    emit('selectGenre', null);
    selected.value = [];
}
</script>

<template>
    <div class="w-1/2 sm:w-full">
      <h2 class="text-2xl font-semibold text-white">Filter by genre</h2>
      <ul class="flex flex-wrap gap-2 mt-4 text-sm"
          >
        <li
          class="cursor-pointer rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 hover:bg-sky-700"
          :class="{ active: selected.includes(genre) }"
          v-for="(genre, index) of allGenre"
          :key="index"
          @click="selectGenre(genre)"
        >
          {{ genre }}
        </li>
      </ul>
      <button
        class="bg-sky-500 hover:bg-sky-700 rounded-full px-4 py-0.5 mt-2"
        v-if="selected.length"
        @click="resetFilter"
      >
        Reset Filter
      </button>
    </div>
</template>
<style scoped>
.active {
  background: #ec4899;
  color: #f5f5f5;
}
</style>