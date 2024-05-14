
import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'


const handleCheckboxChange = (event) => {
  // Реализация выбора нескольких мероприятий для покупки
  console.log(event.target.checked);
}

export default class CartEvent extends Component {
  render() {
    return (
        <div className='item'>
        <img src={"./img/" + this.props.item.img}/>
       <h2>{this.props.item.title}</h2>
       {/* <p>{this.props.item.desc}</p> */}
       <p>{this.props.item.price}</p> 
       <FaTrash className='delete-icon' onClick={() => this.props.onDeleteCart(this.props.item.id)}/>
       <input type='checkbox' onChange={handleCheckboxChange} />
     </div>
    )
  }
}

