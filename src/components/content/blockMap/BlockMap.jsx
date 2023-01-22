import React, { useEffect } from 'react';
import './style.scss'
import img from '../../../sorce/img/Image1.png'
import right from '../../../sorce/img/map/icon/right.svg'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Group from '../../../sorce/img/map/icon/Group.svg'
import { useState } from 'react';
import plus from '../../../sorce/img/map/icon/plus.svg'
import minus from '../../../sorce/img/map/icon/minus.svg'

function BlockMap() {

   const map = React.useRef(null);
   const [zoom, setZoom] = useState(17)
   useEffect(() => {
      if (map.current) {
         map.current.setZoom(zoom, { duration: 300 });
      }
   }, [zoom]);

   return (
      <section className='container-main map-container'>
         <div className="map-contentContainer">
            <div className="map-content">
               <div className="contentMap-img">
                  <img src={img} alt="" className='img' />
               </div>
               <div className="contentMap-info">
                  <div className="contentMap-adress">
                     <div className="adress-text">Екатеринбург, Московский тракт 7 км, 2</div>
                     <div className="adress-text">Телефон: +7 (999) 123-45-67</div>
                  </div>
                  <div className="contentMap-serv">
                     <div className="service-text">
                        <div className="service-title">Cервис: </div>
                        <span>
                           <a href="/#" className='service-link'>service@example.ru</a>
                        </span>
                     </div>
                     <div className="service-text">
                        <div className="service-title">Отдел запасных частей: </div>
                        <span>
                           <a href="/#" className='service-link'>parts@example.ru</a>
                        </span>
                     </div>
                  </div>
                  <div className="contentMap-btnContainer">
                     <button
                        className="page-btn"
                     >
                        Построить маршрут
                        <img src={right} alt="" className='pictures-btn' />
                     </button>
                  </div>
               </div>
            </div>
            <div className="map-map">
               <YMaps >
                  <Map
                     instanceRef={map}
                     defaultState={{ center: [56.815690567892915, 60.524639], zoom }}
                     width='100%' height='100%' >
                     <Placemark geometry={[56.815690567892915, 60.524639]}
                        options={
                           {
                              iconLayout: 'default#image',
                              iconImageHref: Group,
                              iconImageSize: [80, 80],
                           }
                        }
                     />
                  </Map>
               </YMaps>
               <div className="zoom-container">
                  <button
                     className='map-zoomBtn'
                     onClick={() => setZoom(zoom + 1)}
                  >
                     <img src={plus} alt="" />
                  </button>
                  <button
                     className='map-zoomBtn'
                     onClick={() => setZoom(zoom - 1)}
                  >
                     <img src={minus} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default BlockMap;