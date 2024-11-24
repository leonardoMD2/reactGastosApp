export const InputNumeros = ({valor, parentMethod, type}) => {

    /* const handleInputChange = (event) => {
        parentMethod(Number(event.target.value));
    } */
    return(
        <input type={type} value={valor} onChange={parentMethod}/>
    )
}

