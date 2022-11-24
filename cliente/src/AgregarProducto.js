import React,{useState} from 'react'
import ListaProductos from './ListaProductos'
import uniquid from 'uniqid'
import axios from 'axios'

function AgregarProducto(){

    //Hooks
    const[nombreproductos, setNombreproductos]=useState('')
    const[codigoproductos, setcodigoproductos]=useState('')
    const[descripcion, setdescripcion]=useState('')

    function AgregarProducto(){
        var producto = {
            nombreproductos: nombreproductos,
            codigoproductos: codigoproductos,
            descripcion: descripcion,
            idProducto: uniquid()
        }
        console.log(producto)

        axios.post('/api/productos/agregarproducto',producto)
        .then(res => {
            alert(res.data)
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                <h1>Crear un nuevo producto</h1>
            </div>
            
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor='nombre productos' className='form-label'>Nombre Producto</label>
                        <input type="text" className="form-control"value={nombreproductos} onChange={(e) =>{setNombreproductos(e.target.value)}}></input>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor='codigo productos' className='form-label'>Codigo Producto</label>
                        <input type="text" className="form-control"value={codigoproductos} onChange={(e) =>{setcodigoproductos(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor='descripcion' className='form-label'>Descripción</label>
                        <input type="text" className="form-control"value={descripcion} onChange={(e) =>{setdescripcion(e.target.value)}}></input>
                    </div>

                    <button onClick={AgregarProducto}className='btn btn-primary'>Guardar producto</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarProducto