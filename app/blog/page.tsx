import Heading from "@/app/components/heading";
import PostCard from "../components/post-card";
import { getAllPost } from "@/lib/post";

export default async function BlogPage() {
  const post = await getAllPost();

  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">its blog</h2>
      {post.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          href={`/blog/${post.slug}`}
          image={post.image}
          author={post.author}
          description={post.description}
          date={post.date}
        />
      ))}
    </>
  );
}
