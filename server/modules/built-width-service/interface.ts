import { BuiltWith, Tag } from '@prisma/client';

export type CustomBuiltWith = BuiltWith & {
  tags: Pick<Tag, 'name'>[];
};

export interface BuiltWithServiceType {
  all: () => Promise<CustomBuiltWith[]>;
}
