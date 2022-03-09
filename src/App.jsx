//Podemos poner js o jsx, autocompleta mejor con jsx
import React from 'react'
import FormNoControlado from './components/FormNoControlado';
import FormularioControlado from './components/FormularioControlado';
import Frutas from './components/Frutas';
import HookContador from './components/HookContador';
import PropsFrutas from './components/PropsFrutas';
import './styles/style.css'

const App = () => {

    const nombre = "App"

    const user = true;

    //para las props
    const frutas = ["manzana", "plátano", "naranja", "limón"]

    //funciones y eventos
    const funcionClick = (nombre) => {
        console.log(`Me diste click ${nombre}`);
    }

    return (
        //un jsx ()javascript xml
        <div className='web'>
        
        <div className='container'>
            <h2>Componente {nombre}</h2> 

            {/* preguntamos si está el usuario en linea */}
            { user ? "en linea" : "offline" }

            {/* llamamos al componente frutas lo que nos permite
            repetir el componente de forma facil sin escribir mucho código*/}
            <Frutas/>
            <Frutas/>
            <Frutas/>

            {/* Le mandamos la propiedad(prop) */}
            <PropsFrutas frutasApp={frutas}></PropsFrutas>

            {/* eventos */}
            <button onClick={funcionClick("Iris")}>Dame click</button>

            {/* Hooks */}
            <HookContador></HookContador>
        </div>

        <div className='container'>
            <FormularioControlado></FormularioControlado>
        </div>

        <div className='container'>
            <FormNoControlado></FormNoControlado>
        </div>

        </div>
        //si no queremos usar div como contenedor podemos usar <React.Fragment> o llaves vacias <></> que seria un fragment
    )
}

export default App