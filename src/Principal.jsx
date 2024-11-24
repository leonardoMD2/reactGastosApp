import { useState } from 'react'
import { InputNumeros } from './componentes/inputs/Input'
import { ButtonSubmit } from './componentes/buttons/Button'
import InputList from './componentes/inputs/InputList'
import { useNavigate, Link } from "react-router-dom";
import PostData from './utils/POST'
import './App.css'

function Principal() {
  const navegar = useNavigate()
  const [list, setList] = useState("supermercado")
  const [monto, setMonto] = useState("")
  const [des, setDes] = useState("")

  const getList = (e) => {
    setList(e.target.value);
  }

  const getMonto = (e) => {
    setMonto(e.target.value);
  }
  
  const getDes = (e) => {
    setDes(e.target.value);
  }


  const sendData = () => {
      const dataToAPI = {"rubro":list.toString(),"monto":Number(monto),"descripcion":des.toString()}
    if (list != "" && monto != 0 && des != ""){
      
      console.log("enviando a la API", dataToAPI)
      setMonto("")
      setDes("")
      PostData(dataToAPI)
      navegar("/gastoagregado")
    }else{
      console.log("faltan datos")
    }
  }

  return (
    <>
        <header className='header'>
            <Link to="/historial">
              <img src="./grafico.png" alt="grafico" width={"40px"}/>
            </Link>
        </header>
        <main>
          <h1>Control de Gastos</h1>
          <h2>Tipo de gasto</h2>
          <InputList valor={list} parentMethod={getList} />

          <h2>Descripción</h2>
          <InputNumeros type="text" valor={des} parentMethod={getDes} />

          <h2>Monto del gasto</h2>
          <InputNumeros type="number" valor={monto} parentMethod={getMonto} />
        </main>
        <ButtonSubmit parentMethod={sendData} text={"Ingresar"}/> 
   
    </>
  )
}

export default Principal
