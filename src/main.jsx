import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/index.jsx'
import Home from './Rotas/Home.jsx'
import Favoritos from './Rotas/Favoritos.jsx'

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
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
