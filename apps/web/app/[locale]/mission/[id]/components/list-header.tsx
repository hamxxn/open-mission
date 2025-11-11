interface ListHeaderProps {
  title: string;
}

export default function ListHeader({ title }: ListHeaderProps) {
  return (
    <h2 className="w-full text-gray-900 ko-text-head2 border-b border-gray-300 pb-[0.3rem]">
      {title}
    </h2>
  );
}
