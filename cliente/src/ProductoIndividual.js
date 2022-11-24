import React from 'react'
import {Link} from 'react-router-dom'


function ProductoIndividual({productos}){
    return(
        <div className="container">
            <div className="row">

                <div className='col-sm-6 offset-3'>
                <ul className='list-group'>
                    <li className="list-group-item">{productos.idProductos}</li>
                    <li className="list-group-item">{productos.nombreproductos}</li>
                    <li className="list-group-item">{productos.codigoproductos}</li>
                    <li className="list-group-item">{productos.descripcion}</li>
                </ul>

                <Link to={`/editarproducto/${productos.idProductos}`}><li className="btn btn-warning">Editar</li>
                </Link>
                &nbsp;
                <button className="btn btn-success">Borrar</button>
                <hr className="mt-4"></hr>
                </div>
            
            </div>
            
            </div>
        
    

        
    )
}

export default ProductoIndividual