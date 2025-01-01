import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/App.css'
import CVForm from "./components/CVForm.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CVForm></CVForm>
  </StrictMode>,
)
