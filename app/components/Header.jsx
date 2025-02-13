import { navLinks } from '@/public/data';
import logo from '@/public/main/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bg-green drop-shadow-lg">
        <nav className="container py-5 flex items-center justify-between font-bold uppercase">
          {navLinks.map(({ id, url, title }) => {
            return (
              <Link
                key={id}
                href={url}
                className="text-base hover:text-yeloy animate-simple"
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="container pb-1 flex items-center justify-between">
        <Image
          src={logo}
          width="auto"
          height="auto"
          alt="Лого"
          className="w-[65px] cursor-pointer"
        />
        <div className="mt-1 flex flex-col font-bold">
          <Link
            href="tel:89184026758"
            className="text-[20px] hover:text-green animate-simple"
          >
            8 918 402 67 58
          </Link>
          <Link
            href="mailto:azs5@cityoil23.ru"
            className="text-lg hover:text-green animate-simple"
          >
            azs5@cityoil23.ru
          </Link>
        </div>
        <p className="text-[48px] font-light">|</p>
        <div className="mt-1 flex flex-col font-bold">
          <p className="text-[20px] text-green text-center">Краснодар</p>
          <Link
            href="https://yandex.ru/maps/-/CHelqEZ4"
            className="text-lg hover:text-green animate-simple"
            target="_blank"
          >
            ул. Мачуги, 9
          </Link>
        </div>
        <div className="mt-1 flex flex-col font-bold">
          <Link
            href="https://yandex.ru/maps/-/CHelqFNT"
            className="text-lg hover:text-green animate-simple"
            target="_blank"
          >
            ул. Сормовская, 200
          </Link>
          <Link
            href="https://yandex.ru/maps/-/CHelqJo3"
            className="mt-[2px] text-lg hover:text-green animate-simple"
            target="_blank"
          >
            ул. Ростовское ш., 5
          </Link>
        </div>
        <p className="text-[48px] font-light">|</p>
        <div className="mt-1 flex flex-col font-bold">
          <p className="text-[20px] text-yeloy text-center">Курганинск</p>
          <Link
            href="https://yandex.ru/maps/-/CHelq0Oe"
            className="text-lg hover:text-yeloy animate-simple"
            target="_blank"
          >
            ул. Шоссейная, 31
          </Link>
        </div>
      </div>
    </header>
  );
}
