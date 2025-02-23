import { Suspense } from "react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";

import { getMarkdownFromSlug, getMarkdownFiles, toSlug } from "@/utils/file";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingComponent from "@/components/LoadingComponent";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Blog Page",
};

/**
 * Blog post
 */
export default async function Post({ params }: Props) {
  const { slug } = await params;

  const result = await getMarkdownFromSlug(slug);

  if (!result) {
    return <ErrorComponent error="The source could not found !" />;
  }

  const { source, format } = result;

  return (
    <Suspense fallback={<LoadingComponent />}>
      <MDXRemote
        source={source}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            format,
            baseUrl: import.meta.url,
          },
        }}
        components={{
          wrapper: (props: React.ComponentPropsWithoutRef<"div">) => {
            return <div id="mdx-layout">{props.children}</div>;
          },
        }}
        onError={ErrorComponent}
      />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const files = getMarkdownFiles();

  return files.map((filename) => ({
    slug: toSlug(filename),
  }));
}
