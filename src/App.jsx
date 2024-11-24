import './App.css'
import Principal from './Principal'
import GastoAgregado from './GastoAgregado'
import Historial from './Historial'
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/gastoagregado" element={ <GastoAgregado /> } />
        <Route path="/historial" element={ <Historial /> } />
      </Routes>
    </>
  )
}

export default App
