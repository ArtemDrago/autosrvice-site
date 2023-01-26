import React, { useContext } from 'react';
import './style.scss'
import close from '../../sorce/icons/modal/close.svg'
import ModalConsultation from './modalConsultation/ModalConsultation';
import { ModalContext } from '../../context/context';

function Modal() {
   const { setVisible, typeModal } = useContext(ModalContext)
   return (
      <div className='my-modal'
         onClick={() => setVisible(false)}
      >
         <div className="my-modal_box">
            <div className="box-container"
               onClick={(e) => e.stopPropagation()}
            >
               <button
                  onClick={() => setVisible(false)}
                  className='box-button'
               >
                  <img src={close} alt="" />
               </button>
               <div className="myModal-container">
                  <h2 className='myModal-title'>
                     {typeModal == 'record' ? 'Запись на сервис' : 'Перезвоним в течении часа'}
                  </h2>
                  <ModalConsultation
                     setVisible={setVisible}
                     typeModal={typeModal}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Modal;