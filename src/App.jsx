import React from 'react'
import { GlobalStyles } from './assets/styles/global'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {

  return (
    <BrowserRouter>
    <GlobalStyles />
        <Header />
        <Router />
    </BrowserRouter>
  )
}

export default App
