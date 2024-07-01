import React, { useState } from 'react'
import DataContext from './DataContext'

const DataContextProvider = ({children}) => {

const [dataget ,setdataget] = useState([])


  return (
    <DataContext.Provider value={{dataget,setdataget}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider