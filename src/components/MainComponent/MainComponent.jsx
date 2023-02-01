import React, { useContext } from 'react';

import AdvanturesInfo from '../content/strengthsOfTheCompany/AdvanturesInfo';
import AutoMark from '../content/autoMark/AutoMark';
import Adventage from '../content/advantage/Adventage';
import ServicesAuto from '../content/servicesAuto/ServicesAuto';
import Footer from '../footer/Footer';
import Stocks from '../content/stocks/Stocks';
import Reviews from '../content/reviews/Reviews';
import BlockMap from '../content/blockMap/BlockMap';
import Consultation from '../content/consultation/Consultation';
import FullScren from '../content/fullscren/FullScreen';
import Advertisement from '../content/advertisement/Advertisement';
import Modal from '../form/Modal';

import '../MainComponent/styleMain.scss'
import { ModalContext } from '../../context/context';

function MainComponent() {
   const { visible } = useContext(ModalContext)
   return (
      <>
         <section className='container-page '>
            <FullScren />
            <Adventage />
            <ServicesAuto />
            <AdvanturesInfo />
            <AutoMark />
            <Stocks />
            <Reviews />
            <BlockMap />
            <Consultation />
            <Advertisement />
         </section>
         <Footer />
         {visible && <Modal />}
      </>
   );
}

export default MainComponent;