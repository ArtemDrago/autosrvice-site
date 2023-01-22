import React from 'react';
import './style.scss'
import StocksItem from './stocksItem/StocksItem';
import left from '../../../sorce/img/sliderStocks/left.svg'

function Stocks() {
   return (
      <section className='stocks-container container-main'>
         <div className='stocks-controls'>
            <h2 className='stocks-title'>
               Наши акции
            </h2>
            <button

               className='stocks-btn'
            >
               Все акции
               <img src={left} alt="" />
            </button>
         </div>
         <StocksItem />
      </section>
   );
}

export default Stocks;