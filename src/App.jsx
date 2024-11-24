import './App.css'
import Principal from './Principal'
import GastoAgregado from './GastoAgregado'
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/gastoagregado" element={ <GastoAgregado /> } />
      </Routes>
    </>
  )
}

export default App
