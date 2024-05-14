import React, { Component } from 'react'

//для деления на категории
//данные хранянтся в виде массива для быстрого перебора и вывода на экран
export class Categories extends Component {

    state = {
        selectedCategory: null, // состояние выбранной категории
      };
    
      handleCategoryClick = (el) => {
        const categories = document.querySelectorAll('.categories div');
        categories.forEach(category => category.classList.remove('selected')); // удалить класс "selected" со всех элементов
        const clickedCategory = document.getElementById(el.key);
        if (clickedCategory) {
          clickedCategory.classList.add('selected'); // добавить класс "selected" к кликнутому элементу
        }
        this.props.chooseCategory(el.key);
      };

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
    //   <div className='categories'>
    //     {this.state.categories.map(el => (
    //         <div key={el.key} onClick={() => {
    //             this.props.chooseCategory(el.key);
    //           }}
    //         >{el.name}</div> //props
    <div className='categories'>
    {this.state.categories.map(el => (
      <div
        key={el.key}
        id={el.key}
        onClick={() => this.handleCategoryClick(el)}
      >
        {el.name}
      </div>
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