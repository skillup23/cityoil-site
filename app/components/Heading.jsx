export default function Heading({ children, style }) {
  return (
    <h2 className={`mt-3 mb-[22px] text-4xl font-bold ${style}`}>{children}</h2>
  );
}
