import React from 'react'
import { ButtonSubmit } from './componentes/buttons/Button'
import { useNavigate } from 'react-router-dom'
export const GastoAgregado = () => {
    const navegar = useNavigate()
    const getBack = () => {
        navegar("/")
    }

    return(
        <>
            <h1>Gasto agregado correctamente</h1>
            <ButtonSubmit  parentMethod={getBack} text={"Volver"}/>
        </>
        
    )
}

export default GastoAgregado