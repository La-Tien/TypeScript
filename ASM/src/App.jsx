import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage';
import ProductPage from './page/ProductPage'
import ProductDetail from './page/ProductDetail'
import Dashboard from './page/admin/Dashboard'
import ProductManagement from '../../We17301/src/page/admin/ProductManagement'
import AddProduct from './page/admin/AddProduct'
import UpdateProduct from './page/admin/UpdateProduct'
import { Add, remove, Update } from './api/product'

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  const removeProduct = (id) =>{
    remove(id).then(() => setProduct(product.filter(item => item.id !== id)))
  }

  const onHandleAdd =(products)=>{
    Add(products).then(() => setProduct([...product,  products]))
  }

  const onHandleUpdate = (products) =>{
    Update(products);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='products/:id ' element={<ProductDetail />} />
        </Route>

        <Route path='/admin'>
          {/* <Route index element={<Dashboard />} /> */}
          <Route index element={<ProductManagement product={product} onRemove={removeProduct} />} />
          <Route path='add' element={<AddProduct />} onAdd={onHandleAdd}/>
          <Route path=':id/update ' element={<UpdateProduct />} product={product} onUpdate={onHandleUpdate}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
