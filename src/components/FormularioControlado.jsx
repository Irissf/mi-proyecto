import React from 'react'
import {useState} from "react/cjs/react.development"

const FormularioControlado = () => {

  //valor inicial del State, un objeto
  const [todo,setTodo] = useState({
    todoName:'',
    todoDescripcion:'',
    todoEstado:'pendiente',
    todoCheck:false
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    const {todoName, todoDescripcion} = todo;

    console.log(todoName + " : " + todoDescripcion);
  }

  const handelChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.type);


    /*con ...todo le decimos que nos
        traiga todo lo que tiene todo, y si todoName cambia,q ue agrege el nuevo valor
        Si no lo hacemos de esta manera y solo ponemos todoName:e.target.value eso pisaria
        todo lo que tenemos en el todo  */
    // setTodo({
    //   ...todo,
    //   //si no ponemos entre [] da error, asi le pasamos el valor de dentro, y no el nombre
    //    como tal.
    //   [e.target.name]:e.target.value
    // })

    //Otra manera, aqui no podemos poner los corchetes 
    setTodo((old) => ({
      ...old,
      //debemos controlar si es un checkbox con un if
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
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
            {/* El que suele dar más problemas es del tipo checkbox ya que no le podemos
            pasar el value, el cambio se registra en el checked*/}
            <div>
              <input type="checkbox" name='todoCheck' 
              onChange={handelChange} value={todo.todoCheck}></input>
              <label>Prueba check</label>
            </div>
            <button type='submit'>Agregar</button>
        </form>
    </>
  )
}

export default FormularioControlado