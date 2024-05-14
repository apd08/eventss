import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import store from './store'
// import reducer form './store/reducer'

import './index.css';
// import './components/css/profile.css' //add
import App from './App';
import { rootReducer } from './store/reducers';



const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  // <React.StrictMode>
    // {/* <Provider store={store}> */}
      
    // {/* </Provider> */}
  // </React.StrictMode>
);