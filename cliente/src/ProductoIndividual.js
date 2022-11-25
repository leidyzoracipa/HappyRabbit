import React, { useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


function ProductoIndividual({productos}){

    const navegar = useNavigate()

    //para animacion de scroll al bajar
    useEffect(() =>{
        AOS.init()
    },[])




//funcion para borrar usuario
function borrarproducto(idProductos){
    axios.post('/api/productos/borrarproducto', {idProductos: idProductos}).then(res =>{
        console.log(res.data)
        alert(res.data)
        navegar(0)
    }).catch(err =>{
        console.log(err)
    })
}

    return(
        <div className="container">
            <div className="row">

                <div className='col-sm-6 offset-3' data-aos="fade-down-right">
                <ul className='list-group'>
                    <li className="list-group-item">{productos.idProductos}</li>
                    <li className="list-group-item">{productos.nombreproductos}</li>
                    <li className="list-group-item">{productos.codigoproductos}</li>
                    <li className="list-group-item">{productos.descripcion}</li>
                </ul>

                <Link to={`/editarproducto/${productos.idProductos}`}><li className="btn btn-warning">Editar</li>
                </Link>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{borrarproducto(productos.idProductos)}}>Borrar</button>
                <hr className="mt-4"></hr>
                </div>
            
            </div>
            
            </div>
        
    

        
    )
}

export default ProductoIndividual