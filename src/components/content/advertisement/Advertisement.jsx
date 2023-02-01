import React from 'react';
import './styleAdvertisement.scss'
import iphone from '../../../sorce/img/advertisement/13.png'
import appstore from '../../../sorce/img/advertisement/appstore.png'
import google from '../../../sorce/img/advertisement/google.png'
import yes from '../../../sorce/img/advertisement/yes.svg'

function Advertisement() {
   return (
      <section className='advertisement-container'>
         <div className="container-main">
            <div className="advertisement-colums">
               <div className="advertisement-colum">
                  <img src={iphone} alt="" className='advertisement-phone ' />
               </div>
               <div className="advertisement-colum">
                  <h3 className='advertisement-title'>Скачивайте наше мобильное приложение</h3>
                  <div className="advertisement-content">
                     <div className="advertisement-item">
                        <img src={yes} alt="" />
                        <span className='advertisement-text'>записаться на ремонт</span>
                     </div>
                     <div className="advertisement-item">
                        <img src={yes} alt="" />
                        <span className='advertisement-text'>просмотреть историю обслуживания</span>
                     </div>
                     <div className="advertisement-item">
                        <img src={yes} alt="" />
                        <span className='advertisement-text'>Получать постоянные акции и бонусы</span>
                     </div>
                  </div>
               </div>
               <div className="advertisement-colum">
                  <img src={appstore} alt="" className='advertisement-img' />
                  <img src={google} alt="" className='advertisement-img' />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Advertisement;