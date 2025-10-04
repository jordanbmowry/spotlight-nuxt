<template>
  <div>
    <!-- Hero Section -->
    <Container class="mt-9">
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
          <SocialLink href="#" aria-label="Follow on X">
            <XIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </SocialLink>
          <SocialLink href="#" aria-label="Follow on Instagram">
            <InstagramIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </SocialLink>
          <SocialLink href="#" aria-label="Follow on GitHub">
            <GitHubIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </SocialLink>
          <SocialLink href="#" aria-label="Follow on LinkedIn">
            <LinkedInIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </SocialLink>
        </div>
      </div>
    </Container>

    <!-- Photos Section -->
    <Photos />

    <!-- Articles and Sidebar -->
    <Container class="mt-24 md:mt-28">
      <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-col gap-16">
          <!-- Placeholder for articles -->
          <p class="text-zinc-600 dark:text-zinc-400">Articles will go here</p>
        </div>
        <div class="space-y-10 lg:pl-16 xl:pl-24">
          <Newsletter />
          <Resume />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue'
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '~/components/SocialIcons'
import Photos from '~/components/Photos.vue'
import Newsletter from '~/components/Newsletter.vue'
import Resume from '~/components/Resume.vue'
import SocialLink from '~/components/SocialLink.vue'
</script>
