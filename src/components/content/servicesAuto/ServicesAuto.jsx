import React from 'react';
import { servCard } from '../../../data/data';
import ServCart from './servCart/ServCart';
import './styleServicesAuto.scss'

function ServicesAuto() {
   return (
      <section className='serv-auto '>
         <div className="container-main">
            <h3 className='serv-title'>
               <a name='carService'>Услуги автосервиса</a>
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