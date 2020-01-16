import React from 'react'
import './style.css'

import Header from './components/Header/index'
import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <ul>
      <Routes />
    </ul>
  </div>
  )

export default App;
