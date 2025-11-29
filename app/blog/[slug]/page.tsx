import Heading from "@/app/components/heading";
import { getPost } from "@/lib/post";

// Definisikan type dengan benar
interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="pb-2 text-sm italic">
        {post.date} - {post.author}
      </p>
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
