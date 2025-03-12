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
    title: 'Краснодар, ул. Степана Разина, 57',
    url: 'https://yandex.ru/maps/-/CHBZ665x',
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
    subtitle: 'ТОПЛИВО С\u00A0ПОНИЖЕННЫМ СОДЕРЖАНИЕМ ПРИСАДОК',
  },
  {
    id: id++,
    image: onas2,
    title: 'Доступная цена',
    subtitle: 'ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК С\u00A0нефтебазы, БЕЗ\u00A0НАЦЕНОК',
  },
  {
    id: id++,
    image: onas3,
    title: 'Сити-Маркет',
    subtitle: 'СВЕЖАЯ ВЫПЕЧКА, КОФЕ И ТОВАРЫ В\u00A0ДОРОГУ',
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

import contact2Black from '@/public/main/email-black.svg';
import contact2 from '@/public/main/email.svg';
import contact1 from '@/public/main/phone.svg';
import contact4Black from '@/public/main/telegram-black.svg';
import contact4 from '@/public/main/telegram.svg';
import contact3Black from '@/public/main/whatsapp-black.svg';
import contact3 from '@/public/main/whatsapp.svg';

const contacts = [
  {
    id: id++,
    image: contact1,
    imageBlack: '',
    title: 'Телефон',
    subtitle: '+7 861 204-04-44',
    url: 'tel:88612040444',
  },
  {
    id: id++,
    image: contact2,
    imageBlack: contact2Black,
    title: 'Email',
    subtitle: 'azs5@cityoil23.ru',
    url: 'mailto:azs5@cityoil23.ru',
  },
  {
    id: id++,
    image: contact3,
    imageBlack: contact3Black,
    title: 'Мессенджер',
    subtitle: 'WhatsApp',
    url: '#',
  },
  {
    id: id++,
    image: contact4,
    imageBlack: contact4Black,
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
    price: '57,20',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,50',
  },
  {
    id: id++,
    toplovo: 'Аи98',
    price: '84,60',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '66,10',
  },
];

// Краснодар Сормовская
const priceSorm = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '57,30',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,60',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '66,50',
  },
];

// Краснодар Мачуги
const priceMach = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '57,30',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,60',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '66,50',
  },
];

// Краснодар Степана Разина
const priceRazina = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '57,70',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,70',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '66,50',
  },
];

// Курганинск Щоссейная
const priceShos = [
  {
    id: id++,
    toplovo: 'Аи92',
    price: '57,00',
  },
  {
    id: id++,
    toplovo: 'Аи95',
    price: '62,45',
  },
  {
    id: id++,
    toplovo: 'ДТ зим.',
    price: '66,30',
  },
];

// Стелла
const stellaCity = ['Краснодар', 'Курганинск'];
const stellaAdrKrd = [
  'Ростовское ш., 5',
  'Сормовская, 200',
  'Мачуги, 9',
  'Степана Разина, 57',
];
const stellaAdrKgn = ['Шоссейная, 31'];

export {
  azsAdress,
  contacts,
  navLinks,
  onas,
  priceMach,
  priceRazina,
  priceRost,
  priceShos,
  priceSorm,
  stellaAdrKgn,
  stellaAdrKrd,
  stellaCity,
  workers,
};
