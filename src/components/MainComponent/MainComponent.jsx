import React, { useState } from 'react';

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

import '../MainComponent/style.scss'


function MainComponent({ visible, setVisible, setTypeModal, typeModal }) {

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
            <Consultation
               visible={visible}
               setVisible={setVisible}
               setTypeModal={setTypeModal}
            />
            <Advertisement />
         </section>
         <Footer />
         {visible && <Modal
            typeModal={typeModal}
            setVisible={setVisible}
            setTypeModal={setTypeModal}
         />}
      </>
   );
}

export default MainComponent;