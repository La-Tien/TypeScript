import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import ProductDetail from './page/ProductDetail'
import ProductManagement from './page/admin/ProductManagement'
import AddProduct from './page/admin/AddProduct'
import ProductPage from './page/product'
import UpdateProduct from './page/admin/UpdateProduct'
import { remove, add, update } from './api/product'
import AdminLayout from './page/layout/AdminLayout'
import Dashboard from './page/admin/Dashboard'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const onHandleRemove = (id) => {
    remove(id).then(() => setProducts(products.filter(item => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    add(product).then(() => setProducts([...products, product]))
  }
  const onHandleUpdate = (product) => {
    update(product);
  }
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<ProductPage products={products} onRemove={onHandleRemove} />}/>
        <Route path='/products/:id' element={<ProductDetail />}/>
        <Route path='/admin/products' element={<ProductManagement products={products} onRemove={onHandleRemove} />}/>
        <Route path='/admin/products/add' element={<AddProduct  onAdd={onHandleAdd}/>}/>
        <Route path='/admin/products/:id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate}/>}/> */}

        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
