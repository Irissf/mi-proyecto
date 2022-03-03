import React from 'react'

const Frutas = () => {
    const frutas = ["manzana", "plátano", "naranja"]
    return (
        <div>
            {/* Recorrer un array */}
            <ul>
                {
                    frutas.map((fruta, index) => {
                            return <li key={index}>{index+1}-{fruta}</li> 
                        }
                    )
                }
            </ul>
           
        </div>
    )
}

export default Frutas