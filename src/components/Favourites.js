import React from 'react'
import Event from './Event';


const showEvents = (props) =>{
    let summa = 0;
    props.events.forEach(el => {
      summa += Number.parseFloat(el.price);
    });
    return(
      <div>
        <h2>Избранное</h2>
        <div className='favourites-events'>
        {/*фигурные скобки для вывода html-кода*/}
        {props.events.map(el => ( 
          <Event onDelete={props.onDelete} key={el.id} item = {el}/>
        ))}
        {/* ?  #6 8:38 format - для корректного отображения суммы*/}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p> 
        </div>
      </div>
    )
  }
  
  const showNothing = () => {
    return(
      <div className='empty'>
        <h2>Нет избранного</h2>
      </div>
    )
  }

function Favourites(props) {
  return (
    <div className='event-page'>
    {props.events.length > 0 ?
    showEvents(props) : showNothing()}
  </div>
  )
}

export default Favourites