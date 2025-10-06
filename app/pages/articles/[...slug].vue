<template>
  <Container class="mt-16 lg:mt-32">
    <div class="xl:relative">
      <div class="mx-auto max-w-2xl">
        <button
          type="button"
          @click="$router.back()"
          aria-label="Go back to articles"
          class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
        >
          <Icon
            name="heroicons:arrow-left"
            class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
          />
        </button>

        <article v-if="article">
          <header class="flex flex-col">
            <h1
              class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
            >
              {{ article.title }}
            </h1>
            <time
              :dateTime="(article as any).date"
              class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span
                class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
              />
              <span class="ml-3">{{ formatDate((article as any).date) }}</span>
            </time>
          </header>
          <Prose class="mt-8">
            <ContentRenderer :value="article" />
          </Prose>
        </article>

        <div v-else class="text-center">
          <p class="text-zinc-600 dark:text-zinc-400">Article not found.</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';
import Prose from '~/components/Prose.vue';

// Get the route parameters
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug;

// Fetch the article content using Nuxt Content v3 articles collection
const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  try {
    return await queryCollection('articles').path(`/articles/${slug}`).first();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
});

// Set page metadata
if (article.value) {
  useSeoMeta({
    title: `${article.value.title} - Spencer Sharp`,
    description: article.value.description,
  });
}

// Format date function
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>
