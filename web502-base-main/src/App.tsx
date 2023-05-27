import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import ProductDetail from './page/ProductDetail'
import ProductPage from './page/ProductPage'
import Product from './page/admin/Product'
import AddProduct from './page/admin/AddProduct'
import UpdateProduct from './page/admin/UpdateProduct'
import LayoutAdmin from './page/admin/LayoutAdmin'
import Signup from './page/Signup'
import Signin from './page/Signin'
import { IProduct } from './interface/product'
import { create, getAll, remove, update } from './api/product'
import { IUser } from './interface/auth'
import { register } from './api/auth'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAll().then(({ data }) => setProducts(data))
  }, [])

  const onHandleRemove = (id: number) => {
    if (confirm("Ban co chac chan muon xoa san pham?"))
      remove(id).then(() => setProducts(products.filter((item) => item.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    create(product).then(({ data }) => setProducts(data))
  }
  const onHandleUpdate = (product: IProduct) => {
    update(product).then(() => setProducts(products.map((item) => item.id === product.id ? product : item)))
  }
  const onHandleRegister = (user: IUser) => {
    register(user).then(({ data }) => setProducts(data))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<Signup onSignup={onHandleRegister}/>} />
          <Route path='signin' element={<Signin />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} />} />
            <Route path=':id' element={<ProductDetail  products={products} />} />
          </Route>
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<Product  products={products} onRemove={onHandleRemove} />} />
          <Route path='products'>
            <Route index element={<Product products={products} onRemove={onHandleRemove}/>} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
