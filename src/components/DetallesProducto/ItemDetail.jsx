import React from 'react'
import ItemContador from '../DetallesProducto/ItemCount'
import { CCard, CRow , CCol, CCardImage , CCardBody , CCardTitle , CCardText} from '@coreui/react';
import { CartContext } from "../context/ShoppingCartContext";
import { useContext, useState } from 'react'






const ItemDetail = ({dato}) => {

    const {cart, setCart, comision} = useContext(CartContext)

    
  return (
    <div>
      
      {
        dato.map((dato)=>{
            
        return(
          <div key={dato.id} className='col-md-5 contornoDetalle'>
            <CCard className="mb-3 cardTama " style={{  marginTop:'10px', display:'flex' }}>
            <CRow className="g-0 CartaAdentro" >
                <CCol md={3} className='col1Card' >
                <CCardImage className='imagen' src={dato.image} style={{ width: '150px', maxHeight: '200px' }} />
                <CCardTitle className='tituloCarta'>{dato.title}</CCardTitle>
                </CCol>
                <CCol md={5} style={{ width: '40%', maxHeight: '200px', display:'flex', margin:'auto' }}>
                <CCardBody style={{ marginTop: '-30%' }}>
                    <CCardText className='precio' style={{ display:'flex', margin:'auto', width: '100%', justifyContent:'center' }}>
                    Precio: {dato.price}
                    </CCardText>
                    <ItemContador  />
                </CCardBody>
                </CCol>
            </CRow>
            </CCard>
          </div>
              
          ) ;
        })
      }
     
    </div>
  )
}

export default ItemDetail