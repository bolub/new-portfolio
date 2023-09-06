import { Comment } from '@prisma/client';

export type CustomComment = Comment;

export interface CommentServiceType {
  all: (args: { postId: string }) => Promise<CustomComment[]>;
  create: (args: {
    postId: string;
    message: string;
    author: string;
  }) => Promise<CustomComment>;
}
