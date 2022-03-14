import React, { useRef } from 'react'

const FormNoControlado = () => {

  //Hook para las referencias
  const formulario = useRef (null);

  const handleSubmit = (e) => {
      //evitar que se recarge la pagina al mandar el formulario
      e.preventDefault();
      
      //cogemos los datos del formulario
      const datos = new FormData(formulario.current);

      //los ... son spread operator
      /* spread operator => es un operador que simplifica la recogida de valores en una estructura de datos
      Convierte un array o un objeto en el conjunto de valores que contiene. */
      console.log(...datos.entries());

      //object for entries
      const objetoDatos = Object.fromEntries([...datos.entries()]);
      console.log(objetoDatos);

      //hacemos para repasar variables de cada parte del objeto
      const{todoName,todoDescripcion,todoEstado} = objetoDatos;

      //como todoDescripcion.trim() === ""
      if (!todoDescripcion.trim() || !todoName.trim()) {
        console.log("está vacio el texto")
        return //para que salga ya, nos ahorramos el else
      }

      console.log("pasó validaciones")
  }


  return (
    <div>
        <h2>Formularios no Controlados</h2>

        {/* Evitaremos los getElementByID o los QuerySelector y usaremos
        en las contadas ocasiones que las necesitemos, las referencias */}
        <form ref={formulario} onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese ToDo' name="todoName" defaultValue="tarea 1"></input>
            <textarea name='todoDescripcion' placeholder='Descripción' defaultValue="descripción tarea 1"></textarea>
            <select name='todoEstado' className='select' defaultValue="pendiente">
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type='submit'>Agregar</button>
        </form>

    </div>
  )
}

export default FormNoControlado