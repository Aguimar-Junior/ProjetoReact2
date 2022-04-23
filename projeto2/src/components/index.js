import React, {useState, useEffect} from 'react'

const ContaLetras = () =>{
    
    const [letras,setLetras] = useState(0)
    

        const hendleSoma = () =>{
            setLetras(letras+1)
            
        }


    return(
        <div>
            <fieldset>
                <h1>Contador de letras</h1>
                <form>
                    <textarea onKeyPress={hendleSoma} ></textarea>
                    <input type='submit' value='Limpar' />
                </form>
                <p>{letras}</p>
            </fieldset>
        </div>
    );
}

export default ContaLetras;