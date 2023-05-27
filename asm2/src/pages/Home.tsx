import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ProductPage from './Products'
import { IProduct } from '../interface/product'
import ProductsList from './layout/ProductsList'
import { Pagination } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css'

const background = {
    "background-image":"url(images/banner_2_background.jpg)",
    
}
type Props = {}

const HomePage = (props: Props) => {
    const [product, setProduct] = useState<IProduct[]>([]);

    return (
        <div>

            {/* <!-- Banner --> */}
            <div className="home">
				<div className="home_background parallax-window" data-parallax="scroll" data-image-src="../images/shop_background.jpg"></div>
				<div className="home_overlay"></div>
				<div className="home_content d-flex flex-column align-items-center justify-content-center">
					<h2 className="home_title">new era of smartphones</h2>
				</div>
			</div>
            {/* <div className="banner">
                <div className="banner_background"> <img className="img-fluid" src="https://www.bidv.com.vn/wps/wcm/connect/ae18b135-5a31-43d2-96d9-f080c02e1b0f/Banner+web_1440+x+500.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ae18b135-5a31-43d2-96d9-f080c02e1b0f-nQJpvGz" alt=""/></div>
                <div className="container fill_height ">
                    <div className="row fill_height">
                        <div className="banner_product_image"></div>
                        <div className="col-lg-5 offset-lg-4 fill_height">
                            <div className="banner_content">
                                <h1 className="banner_text ">new era of smartphones</h1>
                                <div className="banner_price"><span>$530</span>$460</div>
                                <div className="banner_product_name">Apple Iphone 6s</div>
                                <div className="button banner_button"><a href="#">Shop Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Characteristics --> */}

            <div className="characteristics">
                <div className="container">
                    <div className="row">

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_1.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_2.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_3.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src=".../../assets/images/char_4.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="deals_featured">
                <div className="container">
                    {/* <div className="row"> */}
                        {/* <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start"> */}

                            {/* <!-- Deals --> */}

                            

                            {/* <!-- Featured --> */}
                            {/* <div className="featured"> */}
                                <div className="tabbed_container">
                                    <div className="tabs">
                                        <ul className="clearfix">
                                            <li className="active">Featured</li>
                                            <li>On Sale</li>
                                            <li>Best Rated</li>
                                        </ul>
                                        <div className="tabs_line"><span></span></div>
                                    </div>

                                    {/* <!-- Product Panel --> */}
                                    <div className="product_panel panel active">
                                        <ProductsList />
                                    </div>
                                    {/* <!-- Product Panel --> */}
                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>
                                    {/* <!-- Product Panel --> */}
                                {/* </div> */}
                            </div>

                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>

        </div >
    )
}

export default HomePage

