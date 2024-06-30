import React, { useState } from 'react'
import CartDataContext from './CartDataContext'

const CartDataProvider = ({children}) => {
  
    let [cartdata,setcartdata] = useState([])

  return (
    <CartDataContext.Provider value={{cartdata,setcartdata}}>
        {children}
    </CartDataContext.Provider>
  )
}

export default CartDataProvider