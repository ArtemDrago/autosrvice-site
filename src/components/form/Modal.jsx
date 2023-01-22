import React from 'react';
import './style.scss'
import close from '../../sorce/icons/modal/close.svg'
import ModalRecord from './modalRecord/ModalRecord';
import ModalConsultation from './modalConsultation/ModalConsultation';

function Modal({ setVisible, typeModal }) {

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
                  {typeModal == 'record' ?
                     <ModalRecord setVisible={setVisible} />
                     :
                     <ModalConsultation setVisible={setVisible} />
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default Modal;