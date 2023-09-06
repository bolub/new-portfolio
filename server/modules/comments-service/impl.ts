import prisma from '../../../utils/db';
import { CommentServiceType } from './interface';

export const all: CommentServiceType['all'] = async ({ postId }) => {
  return await prisma.comment.findMany({
    where: {
      postId,
    },
  });
};

export const create: CommentServiceType['create'] = async ({
  postId,
  message,
  author,
}) => {
  return await prisma.comment.create({
    data: {
      message,
      postId,
      author,
    },
  });
};

export const CommentService: CommentServiceType = {
  all,
  create,
};
