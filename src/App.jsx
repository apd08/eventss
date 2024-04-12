// import './App.css';
import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router';
// import {useSelector} from 'react-redux'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import ErrorPage from './components/ErrorPage';
import Favourites from './components/Favourites';
import Login from './profile/Login';
import Register from './profile/Register'
import AuthRootComponent from './profile/AurhRootComponent'
import AboutUs from './components/AboutUs';
import Search from './components/Search'

class App extends React.Component {
  // const items1 = useSelector((state) => state.events)
  constructor(props){ /*вот вместо этого бд ввинтить*/    
  super(props)
    this.state = {
      events:[],
      currentItems:[],
      items: [
        {
        id: 1, 
        title: 'Animal world',
        img: 'zoo1.jpg',
        desc: 'Посетите Минский зоопарк и получите незабываемые впечатления',
        category: 'Развлечение',
        price: '20 BYN',
        },
        {
          id: 2, 
          title: 'Щелкунчик',
          img: 'balet-shhelkunchik..jpg',
          desc: 'Посетити новую постановку в "Большом театре"',
          category: 'Театр',
          price: '20 BYN'
          },
          {
            id: 3, 
            title: 'Документальный фильм',
            img: 'AgustD.jpg',
            desc: 'Посетити интересный фильм и откройте для себя мир k-pop',
            category: 'Фильмы',
            price: '50 BYN'
            },
            {
            id: 4, 
            title: 'Посещение лучшей кофейни города Минска',
            img: 'cofix.jpg',
            desc: 'Выпейте вкусный кофе и зарядитесь хорошим настроением на весь день',
            category: 'Развлечение',
            price: '10 BYN'
            },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items; //внцтрь currentItems при загрузке сайта изначально помещаем все элементы, которые находятся в массиве items
    this.addToEvents = this.addToEvents.bind(this); //для взаимодействия с состояниями
    this.deleteEvent = this.deleteEvent.bind(this); //для взаимодействия с состояниями
    this.chooseCategory = this.chooseCategory.bind(this); //для взаимодействия с состояниями
    this.onShowItem = this.onShowItem.bind(this); //для взаимодействия с состояниями
    this.handleSearch= this.handleSearch.bind(this); //для взаимодействия с состояниями



  }
  render(){
    return (
      <div className="wrapper">
        <Header/>
        {/* <Header events={this.state.events} onDelete={this.deleteEvent}/> */}

        {/* <Categories chooseCategory={this.chooseCategory}/> */}

    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" exact element={(
          <>
          <Categories chooseCategory={this.chooseCategory}/>
          <Search onSearch={this.handleSearch} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/>
          </>)} />

        {/* <Route path="/main" element={<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} />} /> */}
        <Route path="/main" exact element = {(
        <Fragment>
          <Categories chooseCategory={this.chooseCategory}/>
          <Search onSearch={this.handleSearch} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/> 
          </Fragment>)}/>
        {/* <Route path="/one" element={<Account />} />
        <Route path="/two" element={<Account />} /> */}

        <Route path="/register" element={<Register/>} />
        <Route path="/register/login" element={<Login/>} />

        <Route path="/login/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/register" element={<AuthRootComponent />} /> */}
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/favourites" element={<Favourites events={this.state.events} onDelete={this.deleteEvent}/>} />

        
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    {/* </BrowserRouter> */}

        {/* <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/> */}

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToEvents} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        {/* <Footer /> */}
      </div>
    );
  }

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    const filteredItems = this.state.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ currentItems: filteredItems });
  }
  
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem}) /*ставим противоположное значение*/
  }

  chooseCategory(category){
if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return 
}

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteEvent(id){
    this.setState({events: this.state.events.filter(el => el.id !== id)})
  }

  addToEvents(item){
    let isInArray = false;
    this.state.events.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray){
          this.setState({events: [...this.state.events, item] }) //добавление к текущему элементу элемента, который передастся в качестве параметра

    }
  }
}

export default App;
