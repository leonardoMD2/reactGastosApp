import React from 'react'
import { ButtonSubmit } from './componentes/buttons/Button'
import { useNavigate } from 'react-router-dom'
import BarChar from './utils/BarChar'
export const Historial = () => {
    const navegar = useNavigate()
    const getBack = () => {
        navegar("/")
    }

    return(
        <>
            <h1>Historial de Gastos</h1>
            <main>
                <BarChar />
                <ButtonSubmit  parentMethod={getBack} text={"Volver"}/>
            </main>
        </>
        
    )
}

export default Historial