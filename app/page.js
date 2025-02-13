import { azsAdress, contacts, onas, workers } from '@/public/data';
import partner4 from '@/public/main/anb.svg';
import azsFoto1 from '@/public/main/azs-foto1.jpg';
import partner2 from '@/public/main/gazprom.svg';
import iconMap from '@/public/main/iconMap.svg';
import mapAzs from '@/public/main/mapAzs.jpg';
import partner3 from '@/public/main/rosneft.svg';
import sale1 from '@/public/main/sale1.jpg';
import partner1 from '@/public/main/tatneft.svg';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './components/Heading';
import InfoBanner from './components/InfoBanner';
import SectionMain from './components/SectionMain';
import Stella from './components/Stella';
import Subtitle from './components/Subtitle';
import Map from './components/Map';

export default function Home() {
  return (
    <main>
      <InfoBanner>
        <p className="mx-auto w-[905px] text-white text-base text-center leading-6">
          Внимание! На АЗС ведутся ремонтные работы, но&nbsp;продажа топлива
          осуществляется в&nbsp;штатном режиме. Мы&nbsp;всегда рады видеть вас
          в&nbsp;числе наших клиентов!
        </p>
      </InfoBanner>

      {/* --------Первый экран--------- */}
      <section className="py-15 w-full min-h-[78vh] first-screen">
        <div className="container text-white">
          <h5 className="text-4xl font-medium">
            БУДЬ
            <br />
            <span className="ml-12 font-black">В РИТМЕ</span>
            <br />
            <span className="ml-[115px] font-black text-yeloy">ГОРОДА</span>
          </h5>

          <h1 className="mt-[100px] text-5xl text-center font-bold leading-16">
            СЕТЬ ГОРОДСКИХ АЗС <br />
            <span className="text-8xl text-green font-black">СИТИОЙЛ</span>
          </h1>
        </div>
      </section>

      {/* --------Цены--------- */}
      <SectionMain style="pattern_background" idScroll="price">
        <div className="flex justify-between">
          <div>
            <Subtitle>ТОПЛИВО НАИВЫСШЕГО КАЧЕСТВА</Subtitle>
            <Heading>Актуальные цены на топливо</Heading>
            <Image
              src={azsFoto1}
              width="auto"
              height="auto"
              alt="фото АЗС"
              className="max-w-[572px] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
          <Stella />
        </div>
      </SectionMain>

      {/* --------Местоположение--------- */}
      <SectionMain idScroll="place">
        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <Subtitle>ДОБРО ПОЖАЛОВАТЬ</Subtitle>
            <Heading>Местоположение АЗС&nbsp;СИТИОЙЛ</Heading>
            <div className="mt-[30px]">
              {azsAdress.map(({ id, url, title }) => {
                return (
                  <Link
                    key={id}
                    href={url}
                    target="_blank"
                    className="mt-3 flex items-center gap-[10px]"
                  >
                    <Image
                      src={iconMap}
                      width="auto"
                      height="auto"
                      alt="фото АЗС"
                      className="w-[50px]"
                    />
                    <h6 className="text-2xl hover:text-green">{title}</h6>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative w-1/2">
            <Image
              src={mapAzs}
              width="auto"
              height="auto"
              alt="фото АЗС"
              className="absolute top-8 left-0 max-w-[535px] h-[356px] self-end rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10"
            />
            <div className="z-20">
              <Map />
            </div>
          </div>
        </div>
      </SectionMain>

      {/* --------Поставщики--------- */}
      <SectionMain style="pattern_background" idScroll="postavki">
        <Subtitle>НАДЕЖНЫЕ БИЗНЕС-ПАРТНЕРЫ</Subtitle>
        <Heading>Поставщики</Heading>

        <div className="flex items-center justify-between">
          <Image
            src={partner1}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[208px]"
          />
          <Image
            src={partner2}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[182px]"
          />
          <Image
            src={partner3}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[160px]"
          />
          <Link href="https://anboil.ru" target="_blank">
            <Image
              src={partner4}
              width="auto"
              height="auto"
              alt="фото АЗС"
              className="max-w-[163px]"
            />
          </Link>
        </div>

        <h6 className="mt-[50px] text-2xl text-center font-bold">
          АЗС «СИТИОЙЛ» приглашает к сотрудничеству бизнес-партнеров
        </h6>
      </SectionMain>

      {/* --------О нас--------- */}
      <InfoBanner style="py-20" idScroll="onas">
        <Heading style="text-center text-white">АЗС СИТИОЙЛ — это</Heading>

        <ul className="mt-[30px] flex items-center justify-between">
          {onas.map(({ id, image, title, subtitle }) => {
            return (
              <li key={id} className="w-1/4">
                <Image
                  src={image}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className="w-[65px] mx-auto"
                />
                <h6 className="text-xl font-bold text-yeloy uppercase text-center">
                  {title}
                </h6>
                <p className="text-sm text-white font-normal uppercase text-center">
                  {subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </InfoBanner>

      {/* --------Акции--------- */}
      <SectionMain style="pattern_background" idScroll="sales">
        <Subtitle>ДЛЯ НОВЫХ И ПОСТОЯННЫХ КЛИЕНТОВ</Subtitle>
        <Heading>Акции и предложения</Heading>
        <div className="flex items-center">
          <div className="w-1/2 mr-20">
            <h5 className="text-2xl text-center text-gray font-bold">
              Данный раздел <br /> находится в разработке. <br /> Просим
              извинения за <br /> предоставленные неудобства.
            </h5>
          </div>

          <Image
            src={sale1}
            width="auto"
            height="auto"
            alt="акция"
            className="w-1/2 -mt-14"
          />
        </div>
      </SectionMain>

      {/* --------Вакансии--------- */}
      <SectionMain idScroll="workin">
        <Subtitle>ИЩЕМ СОТРУДНИКОВ</Subtitle>
        <Heading>Вакансии</Heading>
        <ul className="mt-[30px] flex items-center justify-between">
          {workers.map(({ id, name, place, price, time, phone, adresses }) => {
            return (
              <li
                key={id}
                className="p-4 font-sebold border-2 border-green rounded-lg"
              >
                <h6 className="text-2xl font-bold">{name}</h6>
                <p className="text-xl">{place}</p>
                <div className="w-[495px] text-xl">
                  <p>
                    Адрес:{' '}
                    {adresses.map((item, index) => (
                      <span key={index} className="text-xl">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-xl">{price}</p>
                <p className="text-xl">{time}</p>
                <p className="text-xl">{phone}</p>
              </li>
            );
          })}
        </ul>
      </SectionMain>

      {/* --------Контакты--------- */}
      <SectionMain style="contact-screen text-white" idScroll="contacts">
        <Heading>Контакты</Heading>
        <div className="mt-[90px] mb-[60px] flex items-center justify-between ">
          {contacts.map(({ id, image, title, subtitle, url }) => {
            return (
              <Link
                href={url}
                target="_blank"
                key={id}
                className="w-1/4 flex flex-col gap-[15px] hover:text-green"
              >
                <Image
                  src={image}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className="w-[60px] mx-auto"
                />
                <h6 className="text-2xl font-semibold text-center">{title}</h6>
                <p className="text-2xl font-medium text-center">{subtitle}</p>
              </Link>
            );
          })}
        </div>
      </SectionMain>
    </main>
  );
}
