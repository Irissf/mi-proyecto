//Podemos poner js o jsx, autocompleta mejor con jsx
import React from 'react'
import Frutas from './components/Frutas';

const App = () => {

    const nombre = "App"

    const user = true;

    

    //funciones y eventos
    const funcionClick = (nombre) => {
        console.log(`Me diste click ${nombre}`);
    }

    return (
        //un jsx ()javascript xml
        <>
            <h1>Componente {nombre}</h1> 

            {/* preguntamos si está el usuario en linea */}
            { user ? "en linea" : "offline" }

            {/* llamamos al componente frutas lo que nos permite
            repetir el componente de forma facil sin escribir mucho código*/}
            <Frutas/>
            <Frutas/>
            <Frutas/>

            {/* eventos */}
            <button onClick={funcionClick("Iris")}>Dame click</button>
        </>
        //si no queremos usar div como contenedor podemos usar <React.Fragment> o llaves vacias <></> que seria un fragment
    )
}

export default App