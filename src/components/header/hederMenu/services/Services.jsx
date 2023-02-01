import React from 'react';
import './styleServices.scss'

function Services() {
   return (
      <div className='services-container'>
         <div className='link-box'>
            <a href='#' className='link-service'>Ремонт автомобиля</a>
            <a href='#' className='link-service'>Плановое ТО</a>
            <a href='#' className='link-service'>Диагностика и ремонт</a>
            <a href='#' className='link-service'>Чип тюнинг</a>
         </div>
      </div>
   );
}

export default Services;