import React from 'react';
import './style.scss'
import open from '../../../sorce/icons/line.png'
import close from '../../../sorce/icons/lineClose.png'

function HeaderMenu({ opens, setOpens, openBurger, setOpenBurger, setVisible, visible, setTypeModal }) {

   const openServices = () => {
      setOpens(!opens)
      setOpenBurger(false)
   }
   const openBurgers = () => {
      setOpens(false)
      setOpenBurger(!openBurger)
   }

   const openCloseModal = () => {
      setVisible(!visible)
      setTypeModal('record')
   }

   return (
      <section className='menu'>
         <div className='menu-items'>
            <button
               onClick={openServices}
               className="menu-item"
            >
               Услуги
               <div
                  className='action-btn'
               >
                  <img src={opens ? close : open} alt="/" />
               </div>
            </button>
            <div className="menu-item">
               О компании
            </div>
            <div className="menu-item">
               Гарантии
            </div>
            <div className="menu-item">
               Новости
            </div>
            <div className="menu-item">
               Акции
            </div>
            <div className="menu-item">
               Контакты
            </div>
         </div>
         <div className='client-box'>
            <div className={openBurger ? 'burger-container open' : 'burger-container'}>
               <button
                  className='menu-burger'
                  onClick={openBurgers}
               >
                  <span className={openBurger ? 'burger-item_active' : 'burger-item'}></span>
                  <span className={openBurger ? 'burger-item_active' : 'burger-item'}></span>
                  <span className={openBurger ? 'burger-item_active' : 'burger-item'}></span>
               </button>
            </div>
            <button
               className={openBurger ? 'menu-btn_active' : 'menu-btn'}
               onClick={() => openCloseModal()}
            >
               Запись на сервис
            </button>
         </div>
      </section>
   );
}

export default HeaderMenu;