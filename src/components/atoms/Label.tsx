export default function Label({ text }: { text: string }) {
  return <label className="block mb-1 font-medium">{text}</label>;
}