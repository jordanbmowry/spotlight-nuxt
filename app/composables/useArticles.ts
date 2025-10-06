// Sample articles data
export const useArticles = () => {
  const articles = [
    {
      slug: 'crafting-a-design-system-for-a-multiplanetary-future',
      title: 'Crafting a design system for a multiplanetary future',
      date: '2022-09-05',
      description:
        'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now.',
      author: 'Adam Wathan',
    },
    {
      slug: 'introducing-animaginary',
      title: 'Introducing Animaginary: High performance web animations',
      date: '2022-09-02',
      description:
        'When you are building a website for a company as ambitious as Planetaria, you need to make an impression with animations that look more realistic than reality itself.',
      author: 'Adam Wathan',
    },
    {
      slug: 'rewriting-the-cosmos-kernel-in-rust',
      title: 'Rewriting the cosmOS kernel in Rust',
      date: '2022-07-14',
      description:
        'When we released the first version of cosmOS last year, it was written in Go. But Rust has been gaining popularity and we decided to make the switch.',
      author: 'Adam Wathan',
    },
    {
      slug: 'how-we-use-webgl-to-power-our-3d-engine',
      title: 'How we use WebGL to power our 3D engine',
      date: '2022-06-09',
      description:
        'WebGL is a powerful technology that allows developers to create stunning 3D graphics in the browser. At Planetaria, we use it to create immersive experiences.',
      author: 'Adam Wathan',
    },
  ];

  const getAllArticles = () => {
    return articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  const getLatestArticles = (count: number = 4) => {
    return getAllArticles().slice(0, count);
  };

  return {
    getAllArticles,
    getLatestArticles,
  };
};
