import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';

import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';
import NetflixIndexComponent from './components/NetflixIndexComponent'; // marked as default no need of {}

import LoginComponent from './components/LoginComponent';

import reportWebVitals from './reportWebVitals';
import RegisterComponent from './components/RegisterComponent';
import DataBindingComponent from './components/DataBindingComponent';
import OneWayBindingComponent from './components/OneWayBindingComponent';
import ShoppingComponent from './components/ShoppingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NetflixRegisterComponent /> */}
    {/* <NetflixIndexComponent /> */}
    {/* <LoginComponent/> */}
    {/* <RegisterComponent/> */}
    {/* <DataBindingComponent/> */}
    {/* {<OneWayBindingComponent/>} */}
    {/* {<ShoppingComponent/>} */}
    {/* {<EventBindingComponent/>} */}
    {/* {<TwoWayBinding/>} */}
    {<ShoppingComponent/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
