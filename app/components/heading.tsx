import { font } from "@/app/font";

export default function Heading({ children }: any) {
  return (
    <h1 className={`pb-3 text-2xl font-bold ${font.className}`}>{children}</h1>
  );
}
