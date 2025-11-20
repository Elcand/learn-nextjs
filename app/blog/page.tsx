import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
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
