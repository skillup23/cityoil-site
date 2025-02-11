let id = 0;

const navLinks = [
  {
    id: id++,
    url: "#",
    title: "Цены",
  },
  {
    id: id++,
    url: "#",
    title: "Местоположение",
  },
  {
    id: id++,
    url: "#",
    title: "Поставщики",
  },
  {
    id: id++,
    url: "#",
    title: "О нас",
  },
  {
    id: id++,
    url: "#",
    title: "Акции",
  },
  {
    id: id++,
    url: "#",
    title: "Контакты",
  },
];

const azsAdress = [
  {
    id: id++,
    title: "Краснодар, ул. Ростовское ш., 5",
    url: "https://yandex.ru/maps/-/CHelqJo3",
  },
  {
    id: id++,
    title: "Краснодар, ул. Мачуги, 9",
    url: "https://yandex.ru/maps/-/CHelqEZ4",
  },
  {
    id: id++,
    title: "Краснодар, ул. Сормовская, 200",
    url: "https://yandex.ru/maps/-/CHelqFNT",
  },
  {
    id: id++,
    title: "Курганинск, ул. Шоссейная, 31",
    url: "https://yandex.ru/maps/-/CHelq0Oe",
  },
];

import onas1 from "@/public/main/o-nas1.svg";
import onas2 from "@/public/main/o-nas2.svg";
import onas3 from "@/public/main/o-nas3.svg";
import onas4 from "@/public/main/o-nas4.svg";

const onas = [
  {
    id: id++,
    image: onas1,
    title: "Экологичность",
    subtitle: "ТОПЛИВО С ПОНИЖЕННЫМ СОДЕРЖАНИЕМ ПРИСАДОК",
  },
  {
    id: id++,
    image: onas2,
    title: "Доступная цена",
    subtitle: "ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК С нефтебазы, БЕЗ НАЦЕНОК",
  },
  {
    id: id++,
    image: onas3,
    title: "Сити-Маркет",
    subtitle: "СВЕЖАЯ ВЫПЕЧКА, КОФЕ И ТОВАРЫ В ДОРОГУ",
  },
  {
    id: id++,
    image: onas4,
    title: "Расположение",
    subtitle: "В САМЫХ ОЖИВЛЕННЫХ РАЙОНАХ\u00A0ГОРОДА",
  },
];

const workers = [
  {
    id: id++,
    name: "Оператор-кассир АЗС",
    place: "Краснодар",
    price: "от 3000 руб. за смену",
    time: "График: 1/4 сутки",
    phone: "Телефон: +7 918 123 56 76",
  },
  {
    id: id++,
    name: "Оператор-заправщик АЗС",
    place: "Краснодар",
    price: "от 3000 руб. за смену",
    time: "График: 1/4 сутки",
    phone: "Телефон: +7 918 123 56 76",
  },
  {
    id: id++,
    name: "Оператор-кассир АЗС",
    place: "Курганинск",
    price: "от 3000 руб. за смену",
    time: "График: 1/4 сутки",
    phone: "Телефон: +7 918 123 56 76",
  },
];

import contact2 from "@/public/main/email.svg";
import contact1 from "@/public/main/phone.svg";
import contact4 from "@/public/main/telegram.svg";
import contact3 from "@/public/main/whatsapp.svg";

const contacts = [
  {
    id: id++,
    image: contact1,
    title: "Телефон",
    subtitle: "+7 918 123 56 78",
    url: "tel:89181235678",
  },
  {
    id: id++,
    image: contact2,
    title: "Email",
    subtitle: "info@cityoil23.ru",
    url: "mailto:info@cityoil23.ru",
  },
  {
    id: id++,
    image: contact3,
    title: "Мессенджер",
    subtitle: "WhatsApp",
    url: "tel:89181235678",
  },
  {
    id: id++,
    image: contact4,
    title: "Мессенджер",
    subtitle: "Telegram",
    url: "tel:89181235678",
  },
];

export { azsAdress, contacts, navLinks, onas, workers };
