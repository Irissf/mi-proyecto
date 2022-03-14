import React from 'react'

const FormularioControlado = () => {

  const handleSubmit = (e) =>{

  }

  return (
    <>
        <h2>Fromulario controlado</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese ToDo' name="todoName" defaultValue="tarea 1"></input>
            <textarea name='todoDescripcion' placeholder='Descripción' defaultValue="descripción tarea 1"></textarea>
            <select name='todoEstado' className='select' defaultValue="pendiente">
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type='submit'>Agregar</button>
        </form>
    </>
  )
}

export default FormularioControlado