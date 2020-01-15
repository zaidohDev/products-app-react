import React from 'react'
import './style.css'

import Header from './components/Header/index'
import Main from './pages/main/index'


const App = () => (
  <div className="App">
    <Header />
    <ul>
      <Main />
    </ul>
  </div>
  )

export default App;
