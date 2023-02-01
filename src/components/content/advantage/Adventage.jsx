import React from 'react';
import './styleAdventage.scss'

function Adventage() {
   return (
      <section className='advent-container '>
         <div className="advent-box ">
            <div className="container-main">
               <div className="advent-title">
                  <div className='adv'>
                     Главное преимущество компании
                  </div>
                  <div className='adv'>
                     #1
                  </div>
               </div>
               <div className="collums">
                  <div className="advent-collumn">
                     <h2 className='since'>
                        Работаем <br />с 2012 года
                     </h2>
                  </div>
                  <div className="advent-collumn">
                     <p className='text-advent'>
                        Вашим автомобилем будут заниматься люди с большим опытом, полученным за многие годы и прошедшие множество обучений.
                     </p>
                     <p className='text-advent'>
                        Сотрудники обладают огромным багажом знаний, применяемых на практике.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Adventage;
