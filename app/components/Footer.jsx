import InfoBanner from "./InfoBanner";

export default function Footer() {
  return (
    <footer>
      <InfoBanner style="py-5">
        <p className="mx-auto w-full md:w-[905px] text-white text-sm md:text-xl text-center leading-6">
          © СитиОйл 2025 Все права защищены.
        </p>
      </InfoBanner>
    </footer>
  );
}
