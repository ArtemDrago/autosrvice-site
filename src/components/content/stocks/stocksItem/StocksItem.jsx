import React, { useEffect, useState } from 'react';
import './styleStocksItem.scss'
import { stocks } from '../../../../data/data.js'
import { Carousel } from 'react-bootstrap';
import { useMemo } from 'react';
import left from '../../../../sorce/img/sliderStocks/left.svg'
import fullLeft from '../../../../sorce/icons/fullscreen/left.svg'
import fullRigth from '../../../../sorce/icons/fullscreen/rigth.svg'

function StocksItem() {
   const [index, setIndex] = useState(0);
   const [imgLeng, setImgLeng] = useState([])
   const [controlContent, setControlContent] = useState([])

   const filterContent = () => {
      const current = stocks.filter(el => el.id === index + 1)
      setControlContent(...current)
   }

   useEffect(() => {
      filterContent()
      setImgLeng(stocks.length)
   }, [])
   useMemo(() => {
      filterContent()
   }, [index])

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   const next = () => {
      if (index + 1 > imgLeng - 1) {
         setIndex(0)
      } else {
         setIndex(index + 1)
      }
   }
   const prev = () => {
      if (index === 0) {
         setIndex(imgLeng - 1)
      } else {
         setIndex(index - 1)
      }
   }
   return (
      <div className='container-stocksCarusel'>
         <div className='carousel-boxControl'>
            <Carousel
               className='stocks-carousel'
               indicators={false}
               controls={false}
               activeIndex={index}
               onSelect={handleSelect}
            >
               {
                  stocks.map(el =>
                     <Carousel.Item className='carusell-box' key={el.id}>
                        <img src={el.pictures} alt="" className='w-100' />
                     </Carousel.Item>
                  )
               }
            </Carousel>
            <div className="stocksControl-control">
               <button
                  onClick={() => prev()}
                  className='control stocksControl-button'
               >
                  <img src={fullLeft} alt="" />
               </button>
               <button
                  onClick={() => next()}
                  className='control stocksControl-button'
               >
                  <img src={fullRigth} alt="" />
               </button>
            </div>
         </div>
         <div className='containerStocks-controll'>
            <h2 className="stocksControl-title">{controlContent.title}</h2>
            <div className='stocksControl-data'>{controlContent.data}</div>
            <div className='stocksControl-detailed'>
               <button className='detailed-btn'>
                  <img src={left} alt="" />
               </button>
               <span className='detailed-text'>
                  Подробнее
               </span>
            </div>
         </div>
      </div>
   );
}

export default StocksItem;