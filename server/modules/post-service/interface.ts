import { Comment, Post, Tag } from '@prisma/client';

export type CustomPost = Post & {
  tags: Pick<Tag, 'name'>[];
  comments: Pick<Comment, 'id' | 'message' | 'author'>[];
};

export interface PostServiceType {
  all: () => Promise<CustomPost[]>;
  view: (args: { id: string }) => Promise<CustomPost | null>;
  search: (args: { query: string }) => Promise<CustomPost[]>;
}
