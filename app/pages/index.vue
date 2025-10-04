<template>
  <div class="relative px-4 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-2xl lg:max-w-5xl">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm Spencer, a software designer and entrepreneur based in New York
          City. I'm the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their
          own terms.
        </p>
        <div class="mt-6 flex gap-6">
          <NuxtLink class="group -m-1 p-1" aria-label="Follow on X" href="#">
            <XIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </NuxtLink>
          <NuxtLink class="group -m-1 p-1" aria-label="Follow on Instagram" href="#">
            <InstagramIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </NuxtLink>
          <NuxtLink class="group -m-1 p-1" aria-label="Follow on GitHub" href="#">
            <GitHubIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </NuxtLink>
          <NuxtLink class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="#">
            <LinkedInIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '~/components/SocialIcons'
</script>
