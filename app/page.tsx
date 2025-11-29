import Heading from "@/app/components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omagaaattttt",
  description: "Hello World, this is a Next.js app",
};

export default function Home() {
  return (
    <>
      <Heading>My Next.js App</Heading>
      <p>Hello World, this is a Next.js app</p>
    </>
  );
}
