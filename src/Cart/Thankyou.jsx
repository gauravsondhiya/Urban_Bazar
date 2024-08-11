import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Thankyou = () => {
   const location = useLocation();
   const { carttotal,cartlength } = location.state;
   let navigate= useNavigate()
   let goback=()=>{
      navigate('/')
   }
  return (
    <div className='border  border-black text-center leading-loose m-3 p-3'> 
        <div className=' flex  justify-around'>
         <div>
            <h4 className='text-3xl font-bold  '>Thank you for shopping with us at 
            "Urban_Bazar". </h4>
            <p className='text-2xl font-semibold'>We're excited to let you know that your 
            order has been successfully placed!</p>
         </div>
         <div className='text-2xl'>
           <h3 className='font-bold text-3xl' >Order Summary</h3>
          <p>{`Total Products : ${cartlength}`}</p>
          <p>{`Total Amount :$ ${carttotal}`}</p>
           <button className="border  border-black w-[250px] rounded-lg p-2 hover:bg-red-400" onClick={goback}>Keep Browsing</button>
           <hr/>
         </div>
        </div>
    </div>
  )
}

export default Thankyou