import React from 'react';
import './styleServCart.scss'
import right from '../../../../sorce/icons/fullscreen/rigth.svg'


function ServCart({ data }) {
   return (
      <div className='cart-container'>
         <div className="card-img">
            <img src={data.pictures} alt="" className='image-cart' />
         </div>
         <div className="card-content">
            <div className="card-info">
               <h3 className='cart-title'>
                  {data.title}
               </h3>
               <div className='cart-number'>0{data.id}</div>
            </div>

            <button
               className='cart-btn'
            >
               <img src={right} />
            </button>
         </div>

      </div>
   );
}

export default ServCart;