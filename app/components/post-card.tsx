import Link from "next/link";

type PostCardProps = {
  title: string;
  href: string;
  image: string;
  description: string;
  date: string;
  author: string;
};

export default function PostCard({
  title,
  href,
  image,
  description,
  date,
  author,
}: PostCardProps) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full mb-4 shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
        <div className="relative mb-6 overflow-hidden bg-cover rounded-lg shadow-lg bg-no-repeter">
          <img src={image} className="w-full" />
          <Link href={href}>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
          </Link>
        </div>
      </div>
      <div className="w-full px-3 mb-6 mr-auto shrink-0 grow-0 basis-auto md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-3 text-gray-800">
          <small>
            Published <u>{date}</u> by {""}
            <a href="#!">{author}</a>
          </small>
        </p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
}
