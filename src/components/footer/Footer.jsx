import React from 'react';
import './styleFooter.scss'
import vk from '../../sorce/icons/footer/vk.svg'
import twit from '../../sorce/icons/footer/twit.svg'
import insta from '../../sorce/icons/footer/insta.svg'
import ut from '../../sorce/icons/footer/ut.svg'
import to from '../../sorce/icons/footer/to.svg'

function Footer() {
   const windowInnerWidth = document.documentElement.clientWidth

   return (
      <footer className='footer' >
         <div className="container-main">
            <div className="footer-container">
               <div className="footer-content">
                  <div className="footer-content_colum">
                     <div className="footer-colum-cur">
                        <a href="/#" className="footer-content_colum-mail">info@example.ru</a>
                        <div className="footer-content_colum-operating">
                           Работаем для вас: <br /> Ежедневно с 9:00 до 21:00
                        </div>
                     </div>
                     <div className="footer-content_colum-btns">
                        <button className="footer-content_colum-callback footer-btn">Обратный звонок</button>
                        <button className="footer-content_colum-control footer-btn">Контроль качества</button>
                     </div>
                  </div>
                  <div className="footer-content_colum">
                     <div className="footer-content_colum-colum">
                        <div className="colum-colum_nav">
                           <div className="colum-colum_nav-links">
                              <a href='/#' className="nav-links_link">
                                 О компании
                              </a>
                              <a href='/#' className="nav-links_link">
                                 Гарантии
                              </a>
                              <a href='/#' className="nav-links_link">
                                 Новости
                              </a>
                              <a href='/#' className="nav-links_link">
                                 Акции
                              </a>
                              <a href='/#' className="nav-links_link">
                                 Контакты
                              </a>
                           </div>
                           <div className="colum-colum_nav-btn">
                              <button className="nav-btn">
                                 Личный кабинет
                                 <img src={to} alt="" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="footer-content_colum-colum">
                        <div className='footer-colums'>
                           <h3 className="colum-colum_title">
                              Автоцентры
                           </h3>
                           <div className="colum-colum_list">
                              <div className="colum-colum_list-item">Автосервис VOLVO</div>
                              <div className="colum-colum_list-item">Автосервис Land Rover</div>
                              <div className="colum-colum_list-item">Автосервис VAG</div>
                              <div className="colum-colum_list-item">Автосервис BMW</div>
                              <div className="colum-colum_list-item">Автосервис Mercedes</div>
                              <div className="colum-colum_list-item">Кузовной ремонт и детейлинг</div>
                           </div>
                        </div>
                        <div className='footer-colums'>
                           <h3 className="colum-colum_title">
                              Услуги
                           </h3>
                           <div className="colum-colum_list">
                              <div className="colum-colum_list-item">Ремонт автомобиля</div>
                              <div className="colum-colum_list-item">Плановое ТО</div>
                              <div className="colum-colum_list-item">Диагностика</div>
                              <div className="colum-colum_list-item">Кузовной ремонт и детейлинг</div>
                              <div className="colum-colum_list-item">Чип тюнинг</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer-contact">
                  <div className="footer-contact_column">
                     <div className="footer-contact_social">
                        <img src={vk} alt="" />
                     </div>
                     <div className="footer-contact_social">
                        <img src={insta} alt="" />
                     </div>
                     <div className="footer-contact_social">
                        <img src={twit} alt="" />
                     </div>
                     <div className="footer-contact_social">
                        <img src={ut} alt="" />
                     </div>
                  </div>
                  <div className="footer-contact_column">
                     <div className="footer-contact_column-container">
                        <h3 className="footer-contact_column-title">Адрес автоцентра:</h3>
                        <div className="footer-contact_column-text">Екатеринбург, ул. Московский тракт 7 км, 2<br /> +7 (999) 123-45-67</div>
                     </div>
                     <div className="footer-contact_column-container">
                        <h3 className="footer-contact_column-title">Центр кузовного ремонта:</h3>
                        <div className="footer-contact_column-text">Екатеринбург, ул. Московский тракт 7 км, 2<br /> +7 (999) 123-45-67</div>
                     </div>
                  </div>
               </div>
               <div className=" max-width">
                  <div className="ps-footer">
                     {windowInnerWidth <= 700 ?
                        '© 2022. Спец. автоцентр'
                        :
                        '© 2022 Специализированный автоцентр'
                     }
                  </div>
                  <div className="ps-footer">
                     {windowInnerWidth <= 700 ?
                        'Сайт от'
                        :
                        'Дизайн и разработка'
                     } -
                     <span className='footer-company'>
                        Media Army
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;