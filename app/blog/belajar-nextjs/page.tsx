import Heading from "@/app/components/heading";
import { readFile } from "node:fs/promises";

export default async function BelajarNextjs() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf8");

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
      <p>{text}</p>
    </>
  );
}
