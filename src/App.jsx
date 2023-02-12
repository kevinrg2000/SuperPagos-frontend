import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from "./paginas/Inicio"
import Login from "./paginas/Login"



function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/Inicio" element={<Inicio />}>
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
