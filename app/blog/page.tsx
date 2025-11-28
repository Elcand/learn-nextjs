import Link from "next/link";
import Heading from "@/app/components/heading";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p>list blog</p>
      <ul>
        <li>
          <Link href="/blog/latihan-nextjs">Latihan Next.js</Link>
        </li>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Next.js</Link>
        </li>
      </ul>
    </>
  );
}
