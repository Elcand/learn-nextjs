import Heading from "@/app/components/heading";
import ShareLinkButton from "@/app/components/share-link-button";
import { getPost, getSlugs } from "@/lib/post";

// Definisikan type dengan benar
interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 mb-4">
        <p className="pb-2 text-sm italic">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <img
        src={post.image}
        alt=""
        width={360}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="max-w-screen-sm prose prose-slate"
      ></article>
    </>
  );
}
