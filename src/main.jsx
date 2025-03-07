import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/favoritos" element={<p>Oi!!!</p>} />
        <Route path="/" element={<App />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
