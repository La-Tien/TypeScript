import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomPage from './page/HomPage'
import { Route, Routes, useParams } from "react-router-dom"
import Product from './page/Product'
import ProductDetail from './page/ProductDetail'

function App() {

  const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomPage />} />
        <Route path='/products' element={<Product products={products}/>} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
