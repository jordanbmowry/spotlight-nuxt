<template>
  <SimpleLayout
    title="Writing on software design, company building, and the aerospace industry."
    intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
  >
    <div
      class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div class="flex max-w-3xl flex-col space-y-16">
        <div v-if="!articles || articles.length === 0" class="text-center">
          <p class="text-zinc-600 dark:text-zinc-400">
            No articles found. (Debug: articles count =
            {{ articles?.length || 0 }})
          </p>
        </div>
        <ArticleListItem
          v-for="article in articles"
          :key="article._path"
          :article="article"
        />
      </div>
    </div>
  </SimpleLayout>
</template>

<script setup lang="ts">
import SimpleLayout from '~/components/SimpleLayout.vue';
import ArticleListItem from '~/components/ArticleListItem.vue';

// Set page metadata
useSeoMeta({
  title: 'Articles - Spencer Sharp',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
});

// Fetch all articles using our custom API
const { data: articles } = await useAsyncData('articles', async () => {
  try {
    return await $fetch('/api/articles');
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
});
</script>
