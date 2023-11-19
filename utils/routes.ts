export const routes = {
  home: () => "/",
  projects: {
    home: () => "/projects",
    singleProject: (slug: string) => `/projects/${slug}`,
  },
  blogPost: {
    home: () => "/blog",
    singlePost: (slug: string) => `/blog/${slug}`,
  },
} as const;
