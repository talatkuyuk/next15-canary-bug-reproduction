export type Frontmatter = {
  title: string;
  author: string;
  date: Date;
};

export type Post = Frontmatter & { slug: string };
