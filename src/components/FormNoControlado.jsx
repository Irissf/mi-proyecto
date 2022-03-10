import React, { useRef } from 'react'

const FormNoControlado = () => {

  //Hook para las referencias
  const formulario = useRef (null);

  const handleSubmit = (e) => {
      //evitar que se recarge la pagina al mandar el formulario
      e.preventDefault();
      console.log(e);
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