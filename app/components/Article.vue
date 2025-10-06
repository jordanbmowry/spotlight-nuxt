<template>
  <Card as="article">
    <CardTitle :href="`/articles/${article.slug}`">
      {{ article.title }}
    </CardTitle>
    <CardEyebrow as="time" :dateTime="article.date" :decorate="true">
      {{ formatDate(article.date) }}
    </CardEyebrow>
    <CardDescription>{{ article.description }}</CardDescription>
    <CardCta>Read article</CardCta>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import CardTitle from './CardTitle.vue';
import CardEyebrow from './CardEyebrow.vue';
import CardDescription from './CardDescription.vue';
import CardCta from './CardCta.vue';

interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
}

interface Props {
  article: Article;
}

defineProps<Props>();

// Simple date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
