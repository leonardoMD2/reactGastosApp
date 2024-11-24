const InputList = ({valor, parentMethod}) => {

    return(
        <select value={valor} onChange={parentMethod}>
            <option value="supermercado">Supermercado</option>
            <option value="verduleria">Verduleria</option>
            <option value="panaderia">Panaderia</option>
            <option value="dietética">Dietética</option>
            <option value="carniceria">Carniceria</option>
            <option value="otros">Otros</option>
        </select>
    )
}

export default InputList;
