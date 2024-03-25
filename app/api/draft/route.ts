// https://nextjs.org/docs/app/building-your-application/configuring/draft-mode#step-1-create-and-access-the-route-handler

import { getBlogPost } from "@/contentful/blog/blog";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // https://boluabiola.com/api/draft?secret=j4byQDmKZfcdyw6AXRRM7mebW24MFgWkuvCBt8KU1LBo0iO516M23Cy2pRebzmWk&slug={entry.fields.slug}

  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.GENERATED_PREVIEW_TOKEN || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getBlogPost(slug, true);

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return new Response("Invalid slug", { status: 401 });
  }

  draftMode().enable();

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`/blog/${post.fields.slug}?preview=true`);
}
