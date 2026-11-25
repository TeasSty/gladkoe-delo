export const PHONE = '+7 (995) 508-08-05'
export const PHONE_HREF = 'tel:+79955080805'
export const BOOK_URL = 'https://taplink.cc/laser.dubna'
export const VK_URL = 'https://vk.ru/laser.dubna'
export const UDS_URL = 'https://gladkoedelo.uds.app/c/join?ref=nmkn4945'

export const branches = [
  {
    id: '22a',
    title: 'Боголюбова 22А',
    address: 'г. Дубна, пр-т Боголюбова, 22А',
    hours: 'ежедневно 10:00–20:00',
    map: 'https://yandex.ru/maps/?text=Дубна%20проспект%20Боголюбова%2022А',
  },
  {
    id: '39',
    title: 'Боголюбова 39',
    address: 'г. Дубна, пр-т Боголюбова, 39',
    hours: 'ежедневно 10:00–20:00',
    map: 'https://yandex.ru/maps/?text=Дубна%20проспект%20Боголюбова%2039',
  },
] as const

export const stripItems = [
  {
    id: 'laser',
    title: 'Лазер',
    text: 'Курсы по зонам и комплексам — вспышка за вспышкой к гладкой коже.',
    image: '/images/strip-laser.jpg',
  },
  {
    id: 'lpg',
    title: 'LPG',
    text: 'Аппаратная работа с телом: отёки, плотность, контур.',
    image: '/images/strip-lpg.jpg',
  },
  {
    id: 'cosmo',
    title: 'Косметология',
    text: 'Чистки, пилинги, лазерное омоложение и уход за лицом.',
    image: '/images/strip-cosmo.jpg',
  },
] as const

export const complexes = [
  { name: 'Комплекс S', note: 'Хит', price: 'от 3 990 ₽', hit: true },
  { name: 'Комплекс M', note: 'Хит', price: 'от 4 990 ₽', hit: true },
  { name: 'Комплекс M+', note: 'Хит', price: '6 190 ₽', hit: true },
  { name: 'Комплекс L', note: '', price: 'от 5 990 ₽', hit: false },
  { name: 'Комплекс L+', note: '', price: 'от 6 990 ₽', hit: false },
  { name: 'Комплекс XS / XS+', note: '', price: 'по запросу', hit: false },
] as const

export const cosmo = [
  { name: 'Пилинг PRX-T33', price: 'в прайсе VK' },
  { name: 'Лазерное омоложение', price: 'в прайсе VK' },
  { name: 'Ультразвуковая чистка', price: 'в прайсе VK' },
  { name: 'Комбинированная чистка + PRX', price: 'в прайсе VK' },
] as const
