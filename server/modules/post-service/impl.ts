import prisma from '../../../utils/db';
import { PostServiceType } from './interface';

export const all: PostServiceType['all'] = async () => {
  return await prisma.post.findMany({
    include: {
      tags: {
        select: {
          name: true,
        },
      },
      comments: {
        select: {
          id: true,
          message: true,
          author: true,
        },
      },
    },
  });
};

export const view: PostServiceType['view'] = async ({ id }) => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      tags: {
        select: {
          name: true,
        },
      },
      comments: {
        select: {
          id: true,
          message: true,
          author: true,
        },
      },
    },
  });
};

export const search: PostServiceType['search'] = async ({ query }) => {
  if (!query || query.trim() === '' || query === '') {
    return await all();
  }

  return await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          content: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          tags: {
            some: {
              name: {
                contains: query,
                mode: 'insensitive',
              },
            },
          },
        },
      ],
    },
    include: {
      tags: {
        select: {
          name: true,
        },
      },
      comments: {
        select: {
          id: true,
          message: true,
          author: true,
        },
      },
    },
  });
};

export const PostService: PostServiceType = {
  all,
  view,
  search,
};
