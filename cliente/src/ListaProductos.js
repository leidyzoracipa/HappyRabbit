import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductoIndividual from './ProductoIndividual'

function ListaProductos(){

    const[dataproductos, setdataproducto]=useState([])

    useEffect(() =>{
        axios.get('api/productos/obtenerproductos').then(res =>{
            console.log(res.data)
            setdataproducto(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    //mapear listadeproducto en objeto producto
    const ListaProductos= dataproductos.map(productos=>{
        return(
            <div>
                <ProductoIndividual productos={productos}/>
            </div>
        )
    })

    
    return(
        <div>
            <h2>Lista de productos</h2>
            {ListaProductos}
        </div>
    )
}

export default ListaProductos;