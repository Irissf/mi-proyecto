import React from 'react'

//recibimos los props 
const PropsFrutas = (props) => {
    console.log(props)
    return (
        <div>
            {/* Recorrer un array */}
            <ul>
                {
                    props.frutasApp.map((fruta, index) => {
                            return <li key={index}>{index+1}-{fruta}</li> 
                        }
                    )
                }
            </ul>
           
        </div>
    )
}

export default PropsFrutas