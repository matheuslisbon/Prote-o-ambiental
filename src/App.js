import React from 'react'
import './App.css'
import GlobalStyles from './components/styles/globalStyles'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
  <><GlobalStyles/>

    <BrowserRouter>
      <NavBar/>
        <Routes/>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
