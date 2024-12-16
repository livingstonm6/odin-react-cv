import { useState } from 'react'
import CVForm from "./CVForm.jsx";
import Display from "./Display.jsx";
import '../styles/App.css'

function App() {
  return (
    <div className="app">
        <CVForm></CVForm>
        <Display></Display>
    </div>
  )
}

export default App
