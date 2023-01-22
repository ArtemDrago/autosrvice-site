import React from 'react';
import './style.scss'
import rigth from '../../../sorce/icons/fullscreen/rigth.svg'

function Consultation({ setVisible, visible, setTypeModal }) {

   const openModal = () => {
      setVisible(!visible)
      setTypeModal('consultation')
   }
   return (
      <section className='consultation-container'>
         <div className="container-main ">
            <div className="consultation-content">
               <div className="consultation-info">
                  <div className="consultation-take">
                     Получить консультацию
                  </div>
                  <div className="consultation-box">
                     <div className="boxInfo">
                        <div className="box-consultationText">
                           Оставьте заявку, и наш мастер перезвонит вам, произведет предварительную оценку стоимости услуг и запчастей, и подберет удобное время для визита.
                        </div>
                        <button
                           className='page-btn'
                           onClick={() => openModal()}
                        >
                           Оставить заявку
                           <img src={rigth} alt="" className='pictures-btn' />
                        </button>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Consultation;