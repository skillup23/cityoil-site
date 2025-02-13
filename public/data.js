let id = 0;

const navLinks = [
  {
    id: id++,
    url: '#price',
    title: 'Цены',
  },
  {
    id: id++,
    url: '#place',
    title: 'Местоположение',
  },
  {
    id: id++,
    url: '#postavki',
    title: 'Поставщики',
  },
  {
    id: id++,
    url: '#onas',
    title: 'О нас',
  },
  {
    id: id++,
    url: '#sales',
    title: 'Акции',
  },
  {
    id: id++,
    url: '#workin',
    title: 'Вакансии',
  },
  {
    id: id++,
    url: '#contacts',
    title: 'Контакты',
  },
];

const azsAdress = [
  {
    id: id++,
    title: 'Краснодар, ул. Ростовское ш., 5',
    url: 'https://yandex.ru/maps/-/CHelqJo3',
  },
  {
    id: id++,
    title: 'Краснодар, ул. Мачуги, 9',
    url: 'https://yandex.ru/maps/-/CHelqEZ4',
  },
  {
    id: id++,
    title: 'Краснодар, ул. Сормовская, 200',
    url: 'https://yandex.ru/maps/-/CHelqFNT',
  },
  {
    id: id++,
    title: 'Курганинск, ул. Шоссейная, 31',
    url: 'https://yandex.ru/maps/-/CHelq0Oe',
  },
];

import onas1 from '@/public/main/o-nas1.svg';
import onas2 from '@/public/main/o-nas2.svg';
import onas3 from '@/public/main/o-nas3.svg';
import onas4 from '@/public/main/o-nas4.svg';

const onas = [
  {
    id: id++,
    image: onas1,
    title: 'Экологичность',
    subtitle: 'ТОПЛИВО С ПОНИЖЕННЫМ СОДЕРЖАНИЕМ ПРИСАДОК',
  },
  {
    id: id++,
    image: onas2,
    title: 'Доступная цена',
    subtitle: 'ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК С нефтебазы, БЕЗ НАЦЕНОК',
  },
  {
    id: id++,
    image: onas3,
    title: 'Сити-Маркет',
    subtitle: 'СВЕЖАЯ ВЫПЕЧКА, КОФЕ И ТОВАРЫ В ДОРОГУ',
  },
  {
    id: id++,
    image: onas4,
    title: 'Расположение',
    subtitle: 'В САМЫХ ОЖИВЛЕННЫХ РАЙОНАХ\u00A0ГОРОДА',
  },
];

const workers = [
  {
    id: id++,
    name: 'Оператор-кассир АЗС',
    place: 'Краснодар',
    adresses: [
      'Ростовское шоссе 5, ',
      'Сормовская 200, ',
      'Мачуги 9, ',
      'Степана Разина 57',
    ],
    price: 'от 5000 руб. за смену',
    time: 'График: 1/3',
    phone: 'Телефон: +7 861 204 04 44',
  },
  {
    id: id++,
    name: 'Заправщик АЗС',
    place: 'Курганинск',
    adresses: [
      'Ростовское шоссе 5, ',
      'Сормовская 200, ',
      'Мачуги 9, ',
      'Степана Разина 57',
    ],
    price: 'от 3500 руб. за смену',
    time: 'График: 1/3',
    phone: 'Телефон: +7 861 204 04 44',
  },
];

import contact2 from '@/public/main/email.svg';
import contact1 from '@/public/main/phone.svg';
import contact4 from '@/public/main/telegram.svg';
import contact3 from '@/public/main/whatsapp.svg';

const contacts = [
  {
    id: id++,
    image: contact1,
    title: 'Телефон',
    subtitle: '+7 918 402-67-58',
    url: 'tel:89184026758',
  },
  {
    id: id++,
    image: contact2,
    title: 'Email',
    subtitle: 'azs5@cityoil23.ru',
    url: 'mailto:azs5@cityoil23.ru',
  },
  {
    id: id++,
    image: contact3,
    title: 'Мессенджер',
    subtitle: 'WhatsApp',
    url: '#',
  },
  {
    id: id++,
    image: contact4,
    title: 'Мессенджер',
    subtitle: 'Telegram',
    url: '#',
  },
];

// Краснодар Ростовское
const priceRost = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '56,60',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '61,90',
  },
  {
    id: id++,
    toplovo: 'Аи98',
    price: '84,30',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '65,50',
  },
];

// Краснодар Сормовская
const priceSorm = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '56,70',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,00',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '65,70',
  },
];

// Краснодар Мачуги
const priceMach = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '56,70',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,00',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '65,70',
  },
];

// Курганинск Щоссейная
const priceShos = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '56,70',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,15',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '65,70',
  },
];

// Стелла
const stellaCity = ['Краснодар', 'Курганинск'];
const stellaAdrKrd = ['Ростовское ш., 5', 'Сормовская, 200', 'Мачуги, 9'];
const stellaAdrKgn = ['Шоссейная, 31'];

export {
  azsAdress,
  contacts,
  navLinks,
  onas,
  workers,
  priceRost,
  priceSorm,
  priceMach,
  priceShos,
  stellaCity,
  stellaAdrKrd,
  stellaAdrKgn,
};
