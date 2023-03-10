import React, { useState } from 'react';
import '../header/styleHeader.scss'
import text from '../../sorce/icons/Vector.png'
import Group from '../../sorce/icons/Group.png'
import HeaderMenu from './hederMenu/HeaderMenu';
import Services from './hederMenu/services/Services';
import BurgerActive from './hederMenu/burgerActive/BurgerActive';
import { Outlet } from 'react-router-dom';

function Header() {
   const [opens, setOpens] = useState(false)
   const [openBurger, setOpenBurger] = useState(false)
   return (
      <>
         <div className="container-main">
            <header className='header '>
               <div className='logo-container'>
                  <div className='logo'>
                     <img src={Group} />
                  </div>
                  <div className="text-logo">
                     <img src={text} />
                  </div>
               </div>
               <HeaderMenu
                  opens={opens}
                  setOpens={setOpens}
                  openBurger={openBurger}
                  setOpenBurger={setOpenBurger}
               />
            </header>
         </div>
         {
            opens && <Services />
         }
         {
            openBurger && <BurgerActive />
         }
         <Outlet />
      </>
   );
}

export default Header;