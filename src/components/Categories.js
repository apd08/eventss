import React, { Component } from 'react'

//для деления на категории
//данные хранянтся в виде массива для быстрого перебора и вывода на экран
export class Categories extends Component {
    constructor(props){
        super(props) //передаем в конструктор выше
        this.state = {
            categories: [
                {
                    key: 'all', //театр, развлечения, кино
                    name: 'Всё',
                },
                {
                    key: 'Фильмы',
                    name: 'Фильмы',
                },
                {
                    key: 'Развлечение',
                    name: 'Развлечение',
                },
                {
                    key: 'Театр',
                    name: 'Театр',
                },
            ]
        }

        // this.chooseCategory = this.chooseCategory.bind(this); 
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div> //props
        ))}
      </div>
    )
  }
//   chooseCategory(category){
//     if(category === 'all') {
//       this.setState({currentItems: this.state.items})
//       return 
//     }
    
//         this.setState({
//           currentItems: this.state.items.filter(el => el.category === category)
//         })
//       }
}

export default Categories