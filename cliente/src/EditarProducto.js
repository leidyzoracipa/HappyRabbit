import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditarProducto(){

    const params = useParams()
    //Hooks
    const[nombreproductos, setNombreproductos]=useState('')
    const[codigoproductos, setcodigoproductos]=useState('')
    const[descripcion, setdescripcion]=useState('')

    //para volver atras al index
    const navegar=useNavigate()
    

    useEffect(() => {
        axios.post('/api/productos/obtenerdataproductos', {idProductos: params.idProductos}).then(res =>{
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
            idProductos:params.idProductos
        }


        //hacer la petición usando axios
        axios.post('/api/productos/actualizaproducto',actualizarproducto)
        .then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire('Exito',' el producto se edito correctamente')
            navegar('/')
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

                <button onClick={editarProducto}className='btn btn-info'>Editar producto</button>
            </div>
        </div>
    </div>
    )
}

export default EditarProducto