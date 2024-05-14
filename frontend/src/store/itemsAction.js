import React from 'react'
import { v4 as uuid } from 'uuid'

export const itemsAction = () => {
  return dispatch => {
    //вот тут можно обращение к бд вместо константного далее
    const data = [
      {
        id: 1, 
        title: 'Animal world',
        img: 'zoo1.jpg',
        desc: 'Visit Minsk zoo to have unforgettable emotions',
        category: 'Развлечения',
        price: '20 BYN',
      },
    ];
    dispatch({ type: 'FETCH_EVENT', payload: data });
  }
}