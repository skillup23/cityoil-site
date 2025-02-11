export default function InfoBanner({ children, style }) {
  return (
    <section className={`p-4 bg-gray ${style}`}>
      <div className="container">{children}</div>
    </section>
  );
}
