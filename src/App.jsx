import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <Timer duration={1 * 1000}/>
    </>
  )
}

export default App
