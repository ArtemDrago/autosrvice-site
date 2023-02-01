import React from 'react';
import './styleAdvIconCart.scss'

function AdvIconCart({ data }) {
   return (
      <div className='icon-cart'>
         <img className='ico' src={data.pictures} alt="" />
         <div className="textIcon-cart">
            {data.title}
         </div>
      </div>
   );
}

export default AdvIconCart;