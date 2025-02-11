export default function SectionMain({ style, children }) {
  return (
    <section className={`w-full py-20 text-black ${style}`}>
      <div className="container">{children}</div>
    </section>
  );
}
