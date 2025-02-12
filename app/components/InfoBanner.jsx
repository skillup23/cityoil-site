export default function InfoBanner({ children, style }) {
  return (
    <section className={`p-3 bg-gray ${style}`}>
      <div className="container">{children}</div>
    </section>
  );
}
