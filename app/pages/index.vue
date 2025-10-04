<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
      Welcome to the Portfolio
    </h1>
    <p class="mt-4 text-zinc-600 dark:text-zinc-400">
      This is the home page with the new Nuxt.js header implementation.
    </p>

    <!-- Add some content to test scroll behavior -->
    <div class="mt-8 space-y-4">
      <div
        v-for="i in 20"
        :key="i"
        class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded"
      >
        <p class="text-zinc-700 dark:text-zinc-300">Content section {{ i }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This is the home page
</script>
