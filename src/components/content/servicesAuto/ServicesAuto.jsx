import React from 'react';
import { servCard } from '../../../data';
import ServCart from './servCart/ServCart';
import './style.scss'

function ServicesAuto() {
   return (
      <section className='serv-auto '>
         <div className="container-main">
            <h3 className='serv-title'>
               Услуги автосервиса
            </h3>
            <div className='serv-carts'>
               {servCard.map(el =>
                  <ServCart key={el.id} data={el} />
               )}
            </div>
         </div>
      </section>
   );
}

export default ServicesAuto;