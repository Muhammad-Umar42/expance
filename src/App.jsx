import React from 'react'
import './App.css'
import Expence from './component/child'
import { TransactionProvider } from './component/transContex'



function App() {

  return (
    <>
      <TransactionProvider>
        <Expence />
      </TransactionProvider>

    </>
  )
}

export default App
