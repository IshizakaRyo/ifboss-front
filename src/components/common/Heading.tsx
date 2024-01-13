interface Props {
  text: string;
}
export default function Heading({ text }: Props) {
  return (
    <div className="text-2xl h-24 px-32 flex items-center bg-indigo-900 text-white front-semibold">
      <h1>{text}</h1>
    </div>
  );
}
