<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(rotation, index) in rotations"
        :key="index"
        :class="[
          'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
          rotation,
        ]"
      >
        <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800">
          <!-- Placeholder for images -->
          <div class="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
            Photo {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
</script>
