import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditarProducto(){

    const params = useParams()
    //Hooks
    const[nombreproductos, setNombreproductos]=useState('')
    const[codigoproductos, setcodigoproductos]=useState('')
    const[descripcion, setdescripcion]=useState('')
    

    useEffect(() => {
        axios.post('/api/productos/obtenerdataproductos', {idproductos: params.idproducto}).then(res =>{
            console.log(res.data[0])
            const dataProductos = res.data[0]
            setNombreproductos(dataProductos.nombreproductos)
            setcodigoproductos(dataProductos.codigoproductos)
            setdescripcion(dataProductos.descripcion)
            
        })
    }, [])

    //funcion que actualiza
    function editarProducto(){

        //nuevo objeto para actualizar el ususario
        const actualizarproducto = {
            nombreproductos:nombreproductos,
            codigoproductos:codigoproductos,
            descripcion:descripcion,
            idproductos:params.idproductos
        }


        //hacer la petición usando axios
        axios.post('/api/productos/actualizaproducto',actualizarproducto)
        .then(res => {
            console.log(res.data)
            alert(res.data)
        })
        .then(err => {console.log(err)})
    }
    

    return(
        <div className="container">
        <div className="row">
            <h2>Editar producto</h2>
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

                <button onClick={EditarProducto}className='btn btn-info'>Editar producto</button>
            </div>
        </div>
    </div>
    )
}

export default EditarProducto