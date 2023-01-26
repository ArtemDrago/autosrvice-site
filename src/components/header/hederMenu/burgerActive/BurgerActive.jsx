import React from 'react';
import './style.scss'
import vk from '../../../../sorce/icons/Vk.svg'
import insta from '../../../../sorce/icons/insta.svg'
import tvit from '../../../../sorce/icons/tvit.svg'
import youTube from '../../../../sorce/icons/youTube.svg'
import link from '../../../../sorce/icons/link.svg'

function BurgerActive() {
   return (
      <section className='content-burger'>
         <div className='mini-menu'>
            <div className='list-items'>
               <div className="column">
                  <a href='/#' className='mini-list'>О компании</a>
                  <a href='/#' className='mini-list'>Гарантии</a>
                  <a href='/#' className='mini-list'>Новости</a>
               </div>
               <div className="column">
                  <a href='/#' className='mini-list'>Акции</a>
                  <a href='/#' className='mini-list'>Контакты</a>
               </div>
            </div>
            <div className='services-list'>
               <h3 className='autoservices'>Услуги</h3>
               <div className='serv-block'>
                  <div className='services-column'>
                     <a href='/#' className="services-elem">Ремонт автомобиля</a>
                     <a href='/#' className="services-elem">Плановое ТО</a>
                  </div>
                  <div className='services-column'>
                     <a href='/#' className="services-elem">Диагностика</a>
                     <a href='/#' className="services-elem">Чип тюнинг</a>
                  </div>
               </div>
            </div>
         </div>
         <div className='contact-burger ps'>
            <h2 className='burger-phone'>+7 (999) 123-45-67</h2>
            <a className="burger-mail" href='/#'>
               info@example.ru
            </a>
            <div className="burger-inform">
               Работаем для вас:<br />Ежедневно с 9:00 до 21:00
            </div>
            <div className="contacts">
               <div className="info">
                  <h2 className='inform-title'>Адрес автоцентра: </h2>
                  <div className="inform-content">
                     Екатеринбург, ул. Московский тракт 7 км, 2 <br />+7 (999) 123-45-67
                  </div>
               </div>
               <div className="info">
                  <h2 className='inform-title'>Центр кузовного ремонта:</h2>
                  <div className="inform-content">
                     Екатеринбург, ул. Московский тракт 7 км, 2 <br />+7 (999) 123-45-67
                  </div>
               </div>
            </div>
            <div className="social">
               <a className="social-item" href='/#'>
                  <img src={vk} alt="" />
               </a>
               <a className="social-item">
                  <img src={insta} alt="" />
               </a>
               <a className="social-item">
                  <img src={tvit} alt="" className='icon' />
               </a>
               <a className="social-item">
                  <img src={youTube} alt="" />
               </a>
            </div>
            <div className="confidentially">
               <span className='confidentially_text'> Условия конфиденциальности</span>
            </div>
         </div>
         <div className="contact-burger">
            <h3 className='autoservices'>Автоцентры</h3>
            <hr />
            <div className="serv-list">
               <a href='/#'>Автосервис VOLVO</a>
               <a href='/#'>Автосервис Land Rover</a>
               <a href='/#'>Автосервис VAG</a>
               <a href='/#'>Автосервис BMW</a>
               <a href='/#'>Автосервис Mercedes</a>
               <a href='/#'>Кузовной ремонт и детейлинг</a>
            </div>
            <hr />
            <button className='link-person'>
               <span className='link-person_text'>Личный кабинет</span>
               <img src={link} />
            </button>
         </div>
      </section>
   );
}

export default BurgerActive;