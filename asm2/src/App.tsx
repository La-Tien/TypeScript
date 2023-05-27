import { useEffect, useState } from 'react'
// import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/Products'
import ProductDetailPage from './pages/ProductDetail'
import { create, get, getAll, remove, update } from './api/product'
import { IProduct } from './interface/product'
import LayoutAdmin from './pages/layout/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import ProductsManagement from './pages/admin/products/ProductsManagement'
// import addProduct from './pages/admin/products/AddProduct'
import UpdateProduct from './pages/admin/products/UpdateProduct'
import { createCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import LayoutHome from './pages/layout/LayoutHome'
import CategoryPage from './pages/admin/category/Category'
import AddCategory from './pages/admin/category/AddCategory'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { Register, login } from './api/auth'
import { IUser } from './interface/auth'
import { ICategory } from './interface/category'
import AddProduct from './pages/admin/products/AddProduct'
import AddProductPage from './pages/admin/products/AddProduct'
import Add from './pages/admin/products/Add'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import ProductsList from './pages/layout/ProductsList'

function App() {

  const [product, setProduct] = useState<IProduct[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [categorys, setCategory] = useState<ICategory[]>([])
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data));
    // console.log("product", product)
    getAllCategory().then(({ data }) => setCategory(data))
    // console.log("categories", category)
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAll();
        // console.log("product", data)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllCategory();
        // setCategory(data)
        // console.log("category", data);

      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  const getOne = async (id: number | string) => {
    get(id)
  }
  const onHandleRemove = async (id: number) => {
    if(confirm("Xác nhận bạn muốn xóa sản phẩm? "))
    remove(id).then(() => setProduct(product.filter((item: IProduct) => item._id !== id)))
  }
  const onHandleAdd = async (products: IProduct) => {
    create(products).then(() => getAll().then(({ data }) =>  setProduct(data)))
  }
  const onHandleUpdate = async (products: IProduct) => {
    update(products).then(() => setProduct(product.map((item) => item._id === products._id ? products : item)))
  }
  const onHandleCategory = (category: ICategory) =>{
    createCategory(category).then(() => getAll().then(({ data }) =>  setCategory(data)))

  }
  const onHandleRemoveCat = (id: number)=>{
    if(confirm('Xác nhận bạn muốn xóa danh mục?'))
    deleteCategory(id).then(() => setCategory(categorys.filter((item: ICategory) => item._id !== id)))
  }
  const onHandleUpdateCat = (category: ICategory) =>{
    updateCategory(category).then(() => setCategory(categorys.map((item) => item._id === category._id ? category : item)))
  }
  const onHandleLogin = async (user: IUser) => {
    try {
      const { data } = await login(user)
      if (data) {
        setUsers([...users, data])
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleRegister = async (user: IUser) => {
    try {
      const { data } = await Register(user)
      if (data) {
        setUsers([...users, data])
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutHome  products={product}  />}>
          <Route index element={<HomePage />} />

          <Route path='signin' element={<Signin onLogin={onHandleLogin} />} />
          <Route path='signup' element={<Signup onRegister={onHandleRegister} />} />
          <Route path='Products'>
            <Route index element={<ProductPage />} />
            <Route path=':id' element={<ProductDetailPage  products={product} />}/>

          </Route>
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />

          <Route path='products'>
            <Route index element={<ProductsManagement products={product} onRemove={onHandleRemove} />} />
            {/* <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} /> */}
            {/* <Route path='add' element={<AddProductPage onAdd={onHandleAdd}/>}/> */}
            <Route path='add' element={<Add onAdd={onHandleAdd} />} />
            <Route path='update/:id' element={<UpdateProduct onUpdate={onHandleUpdate} products={product} />} />
          </Route>

          <Route path='Category'>
            <Route index element={<CategoryPage categorys={categorys} onRemoveCat={onHandleRemoveCat} />} /> 
            <Route path='add' element={<AddCategory onAddCategory={onHandleCategory} />} />
            <Route path='update/:id' element={<UpdateProduct onUpdateCat={onHandleUpdateCat} categorys={categorys} />} />

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
