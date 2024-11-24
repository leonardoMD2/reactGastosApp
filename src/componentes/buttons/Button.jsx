export const ButtonSubmit = ({parentMethod, text}) => {

    return(
       <button onClick={parentMethod}>{text}</button>
    )
}

