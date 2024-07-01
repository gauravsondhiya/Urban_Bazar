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
    <div className='thnksboxmain'> 
        <div className='thnksbox'>
         <div><h4>Thank you for shopping with us at 
            "Urban_Bazar". </h4>
            <p>We're excited to let you know that your 
            order has been successfully placed!</p></div>
         <div>
            <hr/>
         </div>
         <div>
           <h3>Order Summary</h3>
          <p>{`Total Products : ${cartlength}`}</p>
          <p>{`Total Amount  :${carttotal}`}</p>
           <button className="lastbutton" onClick={goback}>Keep Browsing</button>
           <hr/>
         </div>
       
          

        </div>
    </div>
  )
}

export default Thankyou