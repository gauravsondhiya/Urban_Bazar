import React from 'react'
import "./Signup.css"
const Signup = () => {
  return (
    <>
        <div className='signupbox'>
            <div className='inputboxes'>
              <h2>Signup</h2>
                   <input placeholder='Name'/>
                   <input placeholder='MobileNO'/>
                   <input placeholder='Email@gmail.com'/>
                   <input placeholder='Password'/>
                  <button className='submit'>Submit</button>
            </div>
          
        </div>
    
    </>
  )
}

export default Signup