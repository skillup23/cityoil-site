import Link from "next/link";
import SocialButtons from "./SocialButtons";

export default function MobileNav({ navLinks, isOpen }) {
  return (
    <nav
      className={`${
        isOpen ? `translate-x-0` : `-translate-x-full`
      } flex lg:hidden absolute w-full h-dvh bg-gray p-8 top-[60px] sm:top-[93px] flex-col gap-4 animate-simple z-30`}
    >
      {navLinks.map(({ id, url, title }) => {
        return (
          <Link
            key={id}
            href={url}
            className="text-[18px] text-white uppercase font-medium tracking-wide hover:text-gray-light animate-simple"
          >
            {title}
          </Link>
        );
      })}

      <div className="mt-2 flex flex-col text-white text-base">
        <p className="text-lg">Краснодар</p>
        <Link
          href="https://yandex.ru/maps/-/CHelqFNT"
          className="hover:text-green animate-simple"
          target="_blank"
        >
          ул. Сормовская, 200
        </Link>
        <Link
          href="https://yandex.ru/maps/-/CHelqJo3"
          className="hover:text-green animate-simple"
          target="_blank"
        >
          ул. Ростовское ш., 5
        </Link>
        <Link
          href="https://yandex.ru/maps/-/CHelqEZ4"
          className=" hover:text-green animate-simple"
          target="_blank"
        >
          ул. Мачуги, 9
        </Link>
      </div>

      <div className="flex flex-col text-white text-base">
        <p className="text-lg">Курганинск</p>
        <Link
          href="https://yandex.ru/maps/-/CHelqFNT"
          className="hover:text-yeloy animate-simple"
          target="_blank"
        >
          ул. Шоссейная, 31
        </Link>
      </div>

      <SocialButtons size={"w-[45px]"} />
    </nav>
  );
}
