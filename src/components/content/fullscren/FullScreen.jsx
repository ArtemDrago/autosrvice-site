import React from 'react';
import './style.scss'
import bottom from '../../../sorce/icons/fullscreen/bottom.svg'
import Slider from './slider/Slider';

function FullScren() {
   const windowInnerWidth = document.documentElement.clientWidth

   return (
      <section className='full-container'>
         <div className="full-collumn">
            <h2 className='full-title'>
               Специализированный Автосервис
            </h2>
            <h2 className="phone-title">
               +7 (999) 123-45-67
            </h2>
            <div className="full-content">
               <div className="content-item">
                  <h3 className='item-title'>Работаем для вас: </h3>
                  <div className='text'>Ежедневно с 9:00 до 21:00</div>
               </div>
               <div className="content-item">
                  <h3 className='item-title'>По адресу: </h3>
                  <div className='text'>Екатеринбург, ул. Московский тракт 7 км, 2</div>
               </div>
            </div>
            <button className='look-serv'>
               <a href='#carService' className='look-serv_link'>
                  {windowInnerWidth <= 745 ? 'Услуги автосервиса' : 'Смотреть услуги'}
                  <img src={bottom} />
               </a>
            </button>
         </div>
         <div className="full-collumn">
            <Slider />
         </div>
      </section>
   );
}

export default FullScren;