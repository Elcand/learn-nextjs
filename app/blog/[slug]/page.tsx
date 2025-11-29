import Heading from "@/app/components/heading";
import { getPost } from "@/lib/post";

export default async function PostPage({ params: { slug } }: any) {
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
