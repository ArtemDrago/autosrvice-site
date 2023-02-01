import one from '../sorce/img/Image1.png'
import two from '../sorce/img/Image2.png'
import free from '../sorce/img/Image3.png'

import card1 from '../sorce/img/serv/1.png'
import card2 from '../sorce/img/serv/2.png'
import card3 from '../sorce/img/serv/3.png'
import card4 from '../sorce/img/serv/4.png'

import icon1 from '../sorce/icons/advInfo/1.svg'
import icon2 from '../sorce/icons/advInfo/2.svg'
import icon3 from '../sorce/icons/advInfo/3.svg'
import icon4 from '../sorce/icons/advInfo/4.svg'

import stock1 from '../sorce/img/sliderStocks/1.png'
import stock2 from '../sorce/img/sliderStocks/2.png'

import star1 from '../sorce/img/sliderStocks/Ratings1.png'
import star2 from '../sorce/img/sliderStocks/Ratings2.png'
import user from '../sorce/img/sliderStocks/user.svg'

export const image = [
   {
      id: 1,
      pictures: one || ''
   },
   {
      id: 2,
      pictures: two || ''
   },
   {
      id: 3,
      pictures: free || ''
   },
];

export const servCard = [
   {
      id: 1,
      title: 'Ремонт автомобиля',
      pictures: card1 || ''
   },
   {
      id: 2,
      title: 'Плановое ТО',
      pictures: card2 || ''
   },
   {
      id: 3,
      title: 'Диагностика и ремонт',
      pictures: card3 || ''
   },
   {
      id: 4,
      title: 'Чип тюнинг',
      pictures: card4 || ''
   },
]

export const advCard = [
   {
      id: 1,
      title: 'Гарантия работы 1 год',
      pictures: icon1 || ''
   },
   {
      id: 2,
      title: 'Квалифицированные сотрудники',
      pictures: icon2 || ''
   },
   {
      id: 3,
      title: 'Комфортные зоны ожидания',
      pictures: icon3 || ''
   },
   {
      id: 4,
      title: 'Современное оборудование',
      pictures: icon4 || ''
   },
]
export const stocks = [
   {
      id: 1,
      title: `Дарим 1000 бонусов за шиномонтаж и хранение`,
      pictures: stock1 || '',
      data: '11 апреля',
   },
   {
      id: 2,
      title: 'Специальное предложение для владельцев VOLVO XC 90',
      pictures: stock2 || '',
      data: '18 ноября',
   },
]
export const reviews = [
   {
      id: 1,
      text: `Решил убить сразу несколько зайцев, 
      и пока гуляли с женой по меге оставил свою Volvo на диагностику в данном центре. 
      Знаю что меняли ранее в другом центре, и что уже нужно было поменять.
       В этом центре лишнего не насчитали, проблемы нашли.
        В следующий раз приеду уже за полным ТО.`,
      autor: 'butyl1n_i',
      data: '23 декабря 2020',
      rating: 4.2,
      star: star1 || '',
      user: user
   },
   {
      id: 2,
      text: `Отличный сервис. 
      Спасибо большое менеджеру Александру, помог и разъяснил (грамотно).
       Самое главное нашел причину и устранил . 
       Не первый раз обращаюсь и пока всем доволен (обращался 01.06.2018г). 
       Немного о самом сервисе. Клиентская зона на твердую 5 . 
       Есть чай и кофе, и пока делают машину, можно занять себя просмотром телевизора. 
       Сама зона просматривается сквозь стекла . 
      Так что можно всегда посмотреть , на какой стадии ремонт! За это я ставлю 5+.`,
      autor: 'butyl1n_i',
      data: '23 декабря 2020',
      rating: 5,
      star: star2 || '',
      user: user
   },
]
