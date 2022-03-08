import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    /* 
        let contador = 0;

        const aumentar = () => {
            contador++;
            console.log(contador);
        }; 
    */

    //Para hacerlo dinámico usaremos el useState [estado_actual,para_actualizar_estado] =>
    // el (0) es el estado inicial
    const [contador,setContador] = useState(0)
    const aumentar = () => {
        setContador(contador + 1);
        console.log(contador);
    }; 

    return (
        <>
            <h2>Contador</h2>
            {/* Aunque aumente contador, no cambia aqui en el dom, tenemos que renderizar
            Usaremos para ello los Hook (en este caso usaremos useState) */}
            <h3>{contador}</h3>
            <button onClick={aumentar}>aumentar</button>
        </>
    )
}

export default HookContador