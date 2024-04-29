import React, { Component } from 'react'

//для деления на категории
//данные хранянтся в виде массива для быстрого перебора и вывода на экран
export class FilterPlace extends Component {

    constructor(props){
      
        super(props) //передаем в конструктор выше
        this.state = {
            places: [
                {
                    key: 'all', //театр, развлечения, кино
                    name: 'Всё',
                },
                {
                    key: 'Минский зоопарк',
                    name: 'Минский зоопарк',
                },
                {
                    key: 'Большой театр',
                    name: 'Большой театр',
                },
                {
                    key: 'Кофейня',
                    name: 'Кофейня',
                },
            ]
        }
    }
  render() {
    return (
    <div className='places'>
   <select onChange={(e) => this.props.choosePlace(e.target.value)}>
          {this.state.places.map(elem => (
            <option key={elem.key} value={elem.key}>
              {elem.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default FilterPlace