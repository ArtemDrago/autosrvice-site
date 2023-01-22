import React, { useState } from 'react';
import './style.scss'
import Carousel from 'react-bootstrap/Carousel';
import left from '../../../../sorce/icons/fullscreen/left.svg'
import rigth from '../../../../sorce/icons/fullscreen/rigth.svg'
import { image } from '../../../../data/index.js';
import { useEffect } from 'react';

function Slider() {
   const [index, setIndex] = useState(0);
   const [imgLeng, setImgLeng] = useState([])

   useEffect(() => {
      setImgLeng(image.length)
   }, [])

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


   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <>
         <section className='control-items'>
            <div className='controls-container'>
               <button
                  onClick={prev}
                  className="control full-control"
               >
                  <img src={left} alt="" />
               </button>
               <button
                  onClick={next}
                  className="control full-control"
               >
                  <img src={rigth} alt="" />
               </button>
            </div>
            <div className='index'>{index + 1}/{imgLeng}</div>
         </section>
         <Carousel
            indicators={false}
            controls={false}
            activeIndex={index}
            onSelect={handleSelect}
         >
            {image.map(img =>
               <Carousel.Item key={img.id}>
                  <img
                     className="d-block w-100"
                     src={img.pictures}
                     alt="First slide"
                  />
               </Carousel.Item>
            )}
         </Carousel>
      </>
   );
}

export default Slider;