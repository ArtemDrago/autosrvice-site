import React from 'react';
import { advCard } from '../../../data';
import AdvIconCart from './advIconCart/AdvIconCart';
import './styleAdvanturesInfo.scss'

function AdvanturesInfo() {
   return (
      <div className="container-main">
         <section className='advInfo-container '>
            <div className="advInfo-column">
               <p className="title-advInfo">
                  Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках специалистов послегарантийного ремонта и технического обслуживания автомобилей.
               </p>
               <p className="text-advInfo">
                  Чтобы автомобиль всегда оставался в отличной форме, необходимо выполнять регулярное ТО по программе рекомендованной производителем.
               </p>
               <p className="text-advInfo">
                  Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ.
               </p>
            </div>
            <div className="advInfo-column">
               {advCard.map(el =>
                  <AdvIconCart key={el.id} data={el} />
               )}
            </div>
            <div className="advInfo-ps">
               Обслуживаем и ремонтируем
            </div>
         </section>
      </div>
   );
}

export default AdvanturesInfo;