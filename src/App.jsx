import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'


function App() {
  return (
    <>
      <Timer duration={15 * 1000}/>
      <br/>
      <br/>
      <a href='blinds.html'><button>Configure Blinds</button></a>
    </>
  )
}

export default App
