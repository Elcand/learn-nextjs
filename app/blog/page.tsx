import Heading from "@/app/components/heading";
import PostCard from "../components/post-card";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">ist blog</h2>
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
