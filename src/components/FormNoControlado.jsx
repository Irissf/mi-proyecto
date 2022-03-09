import React from 'react'

const FormNoControlado = () => {
  return (
    <div>
        <h2>Formularios no Controlados</h2>
        <form>
            <input type="text" placeholder='Ingrese ToDo' name="todoName"></input>
            <textarea name='todoDescripcion' placeholder='Descripción'></textarea>
            <select name='todoEstado' className='select'>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type='submit'>Agregar</button>
        </form>
    </div>
  )
}

export default FormNoControlado