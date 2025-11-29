import Heading from "@/app/components/heading";
import PostCard from "../components/post-card";
import { getAllPost } from "@/lib/post";

export default async function BlogPage() {
  const post = await getAllPost();

  console.log(post);
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">its blog</h2>
      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        image="/assets/image1.jpg"
        author="Admin"
        description="haloo"
        date="13.01.2022"
      />
    </>
  );
}
