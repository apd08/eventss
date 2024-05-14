import React, { useState } from 'react'
import {FaHeart, FaShoppingCart} from "react-icons/fa" //change for new icon
import { Link } from 'react-router-dom';

import Event from './Event';

export default function Header(props) {

  return (
    <header>
        <div>
            <Link to='' className='logo'>Events</Link>
            
            <ul className='nav'>
              {/* <Link to='Register' className='nav-li'>Зарегестрировться</Link>   */}
              <Link to='register' className='nav-li'>Кабинет пользователя</Link>
              <Link to='about' className='nav-li'>Контакты</Link>
            </ul>
            <Link to='cart'><FaShoppingCart  className='event-button'/></Link>
            <Link to='favourites'><FaHeart  className='event-button cart-button'/> </Link>

            {/* <FaHeart onClick={() => setEventOpen(eventOpen = !eventOpen)} className={`event-button ${eventOpen && 'active'}`}/> */}
            {/* change icon, объявляем анонимную функцию при нажатии, значние eventOpen меняется на противоложное */}

            {/* {eventOpen && (
              <div className='event-page'>
                {props.events.length > 0 ?
                showEvents(props) : showNothing()}
              </div>
            )} */}
        </div>
        {/* <div className='presentation'></div> */}
      
    </header>
  )


}

