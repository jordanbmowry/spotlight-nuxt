import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  try {
    const contentDir = join(process.cwd(), 'content/articles');

    // Read all markdown files
    const files = await readdir(contentDir);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const articles = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = join(contentDir, file);
        const fileContent = await readFile(filePath, 'utf-8');

        // Simple frontmatter parsing
        const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) return null;

        const frontmatter = frontmatterMatch[1];
        const metadata: any = {};

        frontmatter.split('\n').forEach((line) => {
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
          _path: `/articles/${file.replace('.md', '')}`,
          title: metadata.title || '',
          description: metadata.description || '',
          date: metadata.date || '',
          author: metadata.author || '',
        };
      })
    );

    const validArticles = articles.filter(Boolean);

    // Sort by date descending
    return validArticles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
});
