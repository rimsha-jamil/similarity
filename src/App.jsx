import React from 'react'
import NameMatcher from './components/nameMatcher'
import ProductSearch from './components/productSearch'

const App = () => {
  return (
    <div className='flex items-center mt-10'>
      <NameMatcher/>
      <ProductSearch/>
      
    </div>
  )
}

export default App