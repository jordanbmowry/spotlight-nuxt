<template>
  <NuxtLink class="group -m-1 p-1" :to="href">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface SocialLinkProps {
  href: string
}

defineProps<SocialLinkProps>()
</script>
