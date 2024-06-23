import React, { useState } from 'react'

const Infopage = (props) => {

        let data = props.values || []
    


  return (
    <>
    
    <div>
          <div>

          </div>
          <div>
             { 
                   data.map((e)=>(
                    <h1 key={e.id}>{e.title}</h1>
                   ))
             }
          </div>
    </div>
    
    
    </>
    
    
  )
}

export default Infopage