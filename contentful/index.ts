import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
});

export const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTUL_PREVIEW_API_TOKEN as string,
  host: "preview.contentful.com",
  // preview.eu.contentful.com
});
