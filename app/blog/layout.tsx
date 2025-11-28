export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/6 p-4 bg-gray-200">Sidebar</div>
      <div className="px-4">{children}</div>
    </div>
  );
}
