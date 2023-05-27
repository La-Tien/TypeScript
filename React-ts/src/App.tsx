import { useEffect, useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/Products'
import ProductDetailPage from './pages/ProductDetail'
import { create, getAll, remove, update } from './api/product'
import { IProduct, IPropsSearch } from './interface/product'
import LayoutAdmin from './pages/layout/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import ProductsManagement from './pages/admin/products/ProductsManagement'
import AddProduct from './pages/admin/products/AddProduct'
import UpdateProduct from './pages/admin/products/UpdateProduct'
import { getAllCategory } from './api/category'
import LayoutHome from './pages/layout/LayoutHome'
import CategoryPage from './pages/admin/category/Category'
import AddCategory from './pages/admin/category/AddCategory'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { Register, login } from './api/auth'
import { IUser } from './interface/auth'

function App() {

  const [product, setProduct] = useState<IProduct[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data));
    console.log("product", product)

    getAllCategory().then(({ data }) => setCategories(data))
    console.log("categories", categories)
  }, [])

  const onHandleRemove = (id: string | number) => {
    remove(id).then(() => setProduct(product.filter((item) => item.id !== id)))
  }



  const onHandleAdd = async (products: IProduct) => {
    try {
      
      const { data } = await create(products)
      if (data) {
        setProduct([...product, data])
      }
    } catch (error) {

    }
  }
  const onHandleUpdate = async (products: IProduct) => {
    try {

      const { data } = await update(products)
      // if (data) {
      console.log(data)
      // }
    } catch (error) {

    }
  }
  const onHandleLogin = async (user: IUser) => {
    try {
      const { data } = await login(user)
      if (data) {
        setProduct([...users, data])
      }
    } catch (error) {

    }
  }
  const onHandleRegister = async (user: IUser) => {
    try {
      const { data } = await Register(user)
      if (data) {
        setProduct([...users, data])
      }
    } catch (error) {

    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutHome />}>
          <Route index element={<HomePage />} />

          <Route path='signin' element={<Signin onLogin={onHandleLogin} />} />
          <Route path='signup' element={<Signup onRegister={onHandleRegister}/>} />
          <Route path='listProducts'>
            <Route index element={<ProductPage products={product} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />

          <Route path='products'>
            <Route index element={<ProductsManagement products={product} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path='update/:id' element={<UpdateProduct onUpdate={onHandleUpdate} products={product} />} />
          </Route>

          <Route path='category'>
            <Route index element={<CategoryPage />} />
            <Route path='add' element={<AddCategory />} />
            {/* <Route path=''/> */}
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
