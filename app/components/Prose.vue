<template>
  <div :class="['prose dark:prose-invert', className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ProseProps {
  className?: string;
}

defineProps<ProseProps>();
</script>
