import React from 'react'
import {useState} from "react/cjs/react.development"

const FormularioControlado = () => {

  //valor inicial del State, un objeto
  const [todo,setTodo] = useState({
    todoName:'',
    todoDescripcion:'',
    todoEstado:'pendiente'
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(todo);
  }

  const handelChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    /*con ...todo le decimos que nos
        traiga todo lo que tiene todo, y si todoName cambia,q ue agrege el nuevo valor
        Si no lo hacemos de esta manera y solo ponemos todoName:e.target.value eso pisaria
        todo lo que tenemos en el todo  */
    // setTodo({
    //   ...todo,
    //   //si no ponemos entre [] da error, pues no se puede poner .en los nombres
    //   [e.target.name]:e.target.value
    // })

    //Otra manera, aqui no podemos poner los corchetes 
    setTodo((old) => ({
      ...old,
      [e.target.name]:e.target.value
    }));
  }

  //Podemos detectar los cambios de los imput en tiempo real
  return (
    <>
        <h2>Fromulario controlado</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese ToDo' name="todoName" 
            onChange={handelChange} value={todo.todoName}>
            {/* debemos poner el value con el onChange, aunque no nos dió error al no ponerlo */}
            </input>
            <textarea name='todoDescripcion' placeholder='Descripción'
            onChange={handelChange} value={todo.todoDescripcion}>
            </textarea>
            <select name='todoEstado' className='select'
            onChange={handelChange} value={todo.todoEstado}>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type='submit'>Agregar</button>
        </form>
    </>
  )
}

export default FormularioControlado