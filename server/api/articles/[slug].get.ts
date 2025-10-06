import { readFile } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    });
  }

  try {
    const filePath = join(process.cwd(), 'content/articles', `${slug}.md`);
    const fileContent = await readFile(filePath, 'utf-8');

    // Simple frontmatter parsing
    const frontmatterMatch = fileContent.match(
      /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
    );
    if (!frontmatterMatch) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Invalid article format',
      });
    }

    const frontmatterContent = frontmatterMatch[1];
    const bodyContent = frontmatterMatch[2];

    const metadata: any = {};

    frontmatterContent.split('\n').forEach((line) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts
          .join(':')
          .trim()
          .replace(/^['"]|['"]$/g, '');
        metadata[key.trim()] = value;
      }
    });

    return {
      _path: `/articles/${slug}`,
      title: metadata.title || '',
      description: metadata.description || '',
      date: metadata.date || '',
      author: metadata.author || '',
      body: bodyContent.trim(),
    };
  } catch (error) {
    console.error('Error reading article:', error);
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    });
  }
});
