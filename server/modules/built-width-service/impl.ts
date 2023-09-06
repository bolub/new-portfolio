import prisma from '../../../utils/db';
import { BuiltWithServiceType } from './interface';

export const all: BuiltWithServiceType['all'] = async () => {
  return await prisma.builtWith.findMany({
    include: {
      tags: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const BuiltWithService: BuiltWithServiceType = {
  all,
};
