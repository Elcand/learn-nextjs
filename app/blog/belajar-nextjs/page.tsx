import Heading from "@/app/components/heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function BelajarNextjs() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf8");
  const html = marked(text);

  return (
    <>
      <Heading>Belajar Next.js</Heading>
      <img
        src="/assets/image1.jpg"
        alt=""
        width={360}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      ></article>
    </>
  );
}
