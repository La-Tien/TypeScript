import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../../assets/styles/main_styles.css'
import '../../assets/styles/responsive.css'
import '../../assets/styles/bootstrap4/bootstrap.min.css'
import '../../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css'
import '../../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css'
import '../../assets/plugins/OwlCarousel2-2.2.1/animate.css'
import '../../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css'
import '../../assets/plugins/slick-1.8.0/slick.css'
import '../../assets/styles/product_responsive.css'
import '../../assets/styles/product_styles.css'
import '../../assets/styles/shop_styles.css'
import '../../assets/styles/shop_responsive.css'


import { useForm } from 'react-hook-form';
import { IProduct } from '../../interface/product';
import { get, getAll } from '../../api/product';
import { Card, List, Image } from 'antd';
import { Typography, } from 'antd';
import { getAllCategory } from '../../api/category'
import { ICategory } from '../../interface/category'
import { getCategory } from '../../api/category'
import axios from 'axios'
import CategoryPage from '../admin/category/Category'

const { Title, Text, Link, } = Typography;
type IProps = {
  products: IProduct[]
}

const LayoutHome = (props: IProps) => {


  const { register, handleSubmit } = useForm()
  const [product, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data))
  }, [])
  console.log("product", product)
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setFilteredProducts(props.products);
  }, [props.products])
  console.log("Products 1:", props.products)
  const fethData = (value: any) => {
    getAll().then(({ data }) =>
    // console.log(data)
    {
      const results = data.filter((data: any) => {
        return (value && data && data.Name.toLowerCase().includes(value))
      })
      setFilteredProducts(results)
    })
  }
  const [input, setInput] = useState([]);
  console.log(input);
  const handleChange = (value: any) => {
    // setInput(value);
    setInput(value);
    if (value === "") {
      setFilteredProducts(props.products)
    } else {
      fethData(value);
    }

  }
  const data = filteredProducts.map((item: IProduct) => {
    console.log("Item:", item)
    return {
      key: item._id,
      name: item.name,
      price: item.price,
      images: item.images,
      desc: item.desc,
    }
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => {
      setCategories(data)
    })
    getAll().then(({ data }) => setProduct(data))
  }, [])
  console.log("categories", categories)
  const onHandleClick = (id: number | string) => {
    axios.get(`/categories/${id}?_embed=product`)
      .then((response) => console.log("response", response))
      //  response.json())
      // .then((data) => setProduct(data.product))
  }
  console.log();
  
  return (

    <div>
      <header className="header">

        {/* <!-- Top Bar --> */}

        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item"><div className="top_bar_icon"> <img src="images/phone.png" alt='' /> </div>+38 068 005 3570</div>
                <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_menu">
                    <ul className="standard_dropdown top_bar_dropdown">
                      <li>
                        <a href="#">English<i className="fas fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="#">Italian</a></li>
                          <li><a href="#">Spanish</a></li>
                          <li><a href="#">Japanese</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">$ US dollar<i className="fas fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="#">EUR Euro</a></li>
                          <li><a href="#">GBP British Pound</a></li>
                          <li><a href="#">JPY Japanese Yen</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="top_bar_user">
                    <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                    <div><a href="/signup">Register</a></div>
                    <div><a href="/signin">Sign in</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Header Main --> */}

        <div className="header_main">
          <div className="container">
            <div className="row">

              {/* <!-- Logo --> */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo"><a href="#">OneTech</a></div>
                </div>
              </div>

              {/* <!-- Search --> */}
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <input type="search" value={input} onChange={(e) => handleChange(e.target.value)} className="header_search_input" placeholder="Search for products..." />
                        {/* <div className="custom_dropdown">
                          <div className="custom_dropdown_list">
                            <span className="custom_dropdown_placeholder clc">All Categories</span>
                            <i className="fas fa-chevron-down"></i>
                            <ul className="custom_list clc" {...register("categoryId")}>
                              {
                                categories.map((item: ICategory) => (
                                  <li>
                                    <a href={`/products/${item._id}`}>{item.name}</a>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div> */}
                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Wishlist --> */}
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                    <div className="wishlist_content">
                      <div className="wishlist_text"><a href="#">Wishlist</a></div>
                      <div className="wishlist_count">115</div>
                    </div>
                  </div>

                  {/* <!-- Cart --> */}
                  <div className="cart">
                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div className="cart_icon">
                        <img src="images/cart.png" alt="" />
                        <div className="cart_count"><span>10</span></div>
                      </div>
                      <div className="cart_content">
                        <div className="cart_text"><a href="#">Cart</a></div>
                        <div className="cart_price">$85</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Navigation --> */}

        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="main_nav_content d-flex flex-row">

                  {/* <!-- Categories Menu --> */}

                  <div className="cat_menu_container">
                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div className="cat_burger"><span></span><span></span><span></span></div>
                      <div className="cat_menu_text">categories</div>
                    </div>

                    <ul className="cat_menu" {...register("categoryId")}>
                      {
                        categories.map((item: ICategory) => (
                          <li>
                            <a href={`/products`}>{item.name}</a>
                            {/* <a href=""> <button onClick={() => onHandleClick(item._id)}>{item.name}</button></a> */}
                            {/* <a onClick={() => onHandleClick(item._id)}>{item.name}</a> */}

                          </li>
                        ))
                      }
                    
                    </ul>
                  </div>

                  {/* <!-- Main Nav Menu --> */}

                  <div className="main_nav_menu ml-auto">
                    <ul className="standard_dropdown main_nav_dropdown">
                      <li><a href="/">Home<i className="fas fa-chevron-down"></i></a></li>
                      <li className="hassubs">
                        <a href="#">Super Deals<i className="fas fa-chevron-down"></i></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Featured Brands<i className="fas fa-chevron-down"></i></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Pages<i className="fas fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/products">Shop<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="">Product<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="blog.html">Blog<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="cart.html">Cart<i className="fas fa-chevron-down"></i></a></li>
                          <li><a href="contact.html">Contact<i className="fas fa-chevron-down"></i></a></li>
                        </ul>
                      </li>
                      <li><a href="blog.html">Blog<i className="fas fa-chevron-down"></i></a></li>
                      <li><a href="contact.html">Contact<i className="fas fa-chevron-down"></i></a></li>
                    </ul>
                  </div>

                  {/* <!-- Menu Trigger --> */}

                  <div className="menu_trigger_container ml-auto">
                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div className="menu_burger">
                        <div className="menu_trigger_text">menu</div>
                        <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Menu --> */}

        <div className="page_menu">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="page_menu_content">

                  <div className="page_menu_search">
                    <form action="#">
                      <input type="search"  {...register("search", { required: true })} className="page_menu_search_input" placeholder="Search for products..." />
                    </form>
                  </div>
                  <ul className="page_menu_nav">
                    <li className="page_menu_item has-children">
                      <a href="#">Language<i className="fa fa-angle-down"></i></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">English<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Italian<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Spanish<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Japanese<i className="fa fa-angle-down"></i></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Currency<i className="fa fa-angle-down"></i></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">US Dollar<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">EUR Euro<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">GBP British Pound<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">JPY Japanese Yen<i className="fa fa-angle-down"></i></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item">
                      <a href="#">Home<i className="fa fa-angle-down"></i></a>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Super Deals<i className="fa fa-angle-down"></i></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Super Deals<i className="fa fa-angle-down"></i></a></li>
                        <li className="page_menu_item has-children">
                          <a href="#">Menu Item<i className="fa fa-angle-down"></i></a>
                          <ul className="page_menu_selection">
                            <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                          </ul>
                        </li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Featured Brands<i className="fa fa-angle-down"></i></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Featured Brands<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Trending Styles<i className="fa fa-angle-down"></i></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Trending Styles<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down"></i></a></li>
                    <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down"></i></a></li>
                  </ul>

                  <div className="menu_contact">
                    <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570</div>
                    <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
      <Outlet />
      {/* <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card >
              <Image src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677179181/test/gooid1uombwgiwsbpa2p.jpg" alt="" />
              <h1><Link href={`/Products/${item.key}`} >{item.name} </Link></h1>

              <Title type="danger" level={4}>{item.price} đ</Title>
              <Text disabled>{item.desc}</Text>
            </Card>
          </List.Item>
        )}
      /> */}
      <footer className="footer">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 footer_col">
              <div className="footer_column footer_contact">
                <div className="logo_container">
                  <div className="logo"><a href="#">OneTech</a></div>
                </div>
                <div className="footer_title">Got Question? Call Us 24/7</div>
                <div className="footer_phone">+38 068 005 3570</div>
                <div className="footer_contact_text">
                  <p>17 Princess Road, London</p>
                  <p>Grester London NW18JR, UK</p>
                </div>
                <div className="footer_social">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fab fa-google"></i></a></li>
                    <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 offset-lg-2">
              <div className="footer_column">
                <div className="footer_title">Find it Fast</div>
                <ul className="footer_list">
                  <li><a href="#">Computers & Laptops</a></li>
                  <li><a href="#">Cameras & Photos</a></li>
                  <li><a href="#">Hardware</a></li>
                  <li><a href="#">Smartphones & Tablets</a></li>
                  <li><a href="#">TV & Audio</a></li>
                </ul>
                <div className="footer_subtitle">Gadgets</div>
                <ul className="footer_list">
                  <li><a href="#">Car Electronics</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="footer_column">
                <ul className="footer_list footer_list_2">
                  <li><a href="#">Video Games & Consoles</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Cameras & Photos</a></li>
                  <li><a href="#">Hardware</a></li>
                  <li><a href="#">Computers & Laptops</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="footer_column">
                <div className="footer_title">Customer Care</div>
                <ul className="footer_list">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order Tracking</a></li>
                  <li><a href="#">Wish List</a></li>
                  <li><a href="#">Customer Services</a></li>
                  <li><a href="#">Returns / Exchange</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Product Support</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* <!-- Copyright --> */}

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col">

              <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                <div className="copyright_content">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </div>
                <div className="logos ml-sm-auto">
                  <ul className="logos_list">
                    <li><a href="#"><img src="images/logos_1.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/logos_2.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/logos_3.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/logos_4.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="styles/bootstrap4/popper.js"></script>
      <script src="styles/bootstrap4/bootstrap.min.js"></script>
      <script src="plugins/greensock/TweenMax.min.js"></script>
      <script src="plugins/greensock/TimelineMax.min.js"></script>
      <script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
      <script src="plugins/greensock/animation.gsap.min.js"></script>
      <script src="plugins/greensock/ScrollToPlugin.min.js"></script>
      <script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
      <script src="plugins/easing/easing.js"></script>
      <script src="js/product_custom.js"></script>
    </div>
  )
}
export default LayoutHome