import Link from "next/link";
import Heading from "@/app/components/heading";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">ist blog</h2>
      <div className="flex flex-wrap">
        <div className="w-full mb-4 shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div className="relative mb-6 overflow-hidden bg-cover rounded-lg shadow-lg bg-no-repeter">
            <img src="/assets/image1.jpg" className="w-full" />
            <Link href="/blog/belajar-nextjs">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>
        <div className="w-full px-3 mb-6 mr-auto shrink-0 grow-0 basis-auto md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 className="text-lg font-bold">Belajar Next.js</h5>
          <p className="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p className="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>
    </>
  );
}
