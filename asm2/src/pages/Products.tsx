import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { getAll } from '../api/product';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Card, List , Image} from 'antd';
// import { Typography, } from 'antd';

// const { Title, Text, Link,  } = Typography;
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import ProductsList from './layout/ProductsList';
import { Pagination } from 'antd';
import { getAllCategory } from '../api/category';
import { ICategory } from '../interface/category';
import { useForm } from 'react-hook-form';


// const data: IProduct[] = 
type Props = {
	// products: IProduct[],
}

const ProductPage = (props: Props) => {
	// const [product, setProducts] = useState<IProduct[]>([]);
	// console.log(product);

	// const data = props.products.map((item: IProduct) => {
	//     console.log(item)
	//     return {
	//         key: item._id,
	//         name: item.name,
	//         price: item.price,
	//         images: item.images,
	//         desc: item.desc,

	//     }
	// });
	const { register, handleSubmit } = useForm()

	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getAllCategory().then(({ data }) => {
			setCategories(data)
		})
	}, [])
	return (
		// <List
		//     grid={{ gutter: 16, column: 4 }}
		//     dataSource={data}
		//     renderItem={(item) => (
		//         <List.Item>
		//             <Card >
		//             <Image src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677179181/test/gooid1uombwgiwsbpa2p.jpg" alt="" />
		//                 <h1><Link href={`/Products/${item.key}`} >{item.name} </Link></h1>

		//                 <Title type="danger" level={4}>{item.price} đ</Title>
		//                 <Text disabled>{item.desc}</Text>
		//             </Card>
		//         </List.Item>
		//     )}
		// />

		// <div>
		//     <h1>ProductPage</h1>

		//     <div className='col d-flex'>
		//         {
		//             props.products.map((item: IProduct, index) => {
		//                 return <div key={index}>
		//                     <h2>{item.name}</h2>
		//                     <h3>{item.price}</h3>
		//                     {/* <h3>{item.images}</h3> */}
		//                     <h3>{item.desc}</h3>
		//                 </div>
		//                 }
		//             )
		//         }
		//     </div>
		// </div>
		// <div>

		<div>


			<div className="home">
				<div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg"></div>
				<div className="home_overlay"></div>
				<div className="home_content d-flex flex-column align-items-center justify-content-center">
					<h2 className="home_title">Smartphones & Tablets</h2>
				</div>
			</div>

			{/* <!-- Shop --> */}

			<div className="shop">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">

							{/* <!-- Shop Sidebar --> */}
							<div className="shop_sidebar">
								<div className="sidebar_section">
									<div className="sidebar_title">Categories</div>
									<ul className="sidebar_categories" {...register("categoryId")}>
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
								<div className="sidebar_section filter_by_section">
									<div className="sidebar_title">Filter By</div>
									{/* <div className="sidebar_subtitle">Price</div> */}
									{/* <div className="filter_price">
											<div id="slider-range" className="slider_range"></div>
											<p>Range: </p>
											<p><input type="text" id="amount" className="amount" readonly ></p>
										</div> */}
								</div>
								{/* <div className="sidebar_section">
										<div className="sidebar_subtitle color_subtitle">Color</div>
										<ul className="colors_list">
											<li className="color"><a href="#" style="background: #b19c83;"></a></li>
											<li className="color"><a href="#" style="background: #000000;"></a></li>
											<li className="color"><a href="#" style="background: #999999;"></a></li>
											<li className="color"><a href="#" style="background: #0e8ce4;"></a></li>
											<li className="color"><a href="#" style="background: #df3b3b;"></a></li>
											<li className="color"><a href="#" style="background: #ffffff; border: solid 1px #e1e1e1;"></a></li>
										</ul>
									</div> */}
								<div className="sidebar_section">
									<div className="sidebar_subtitle brands_subtitle">Brands</div>
									<ul className="brands_list">
										<li className="brand"><a href="#">Apple</a></li>
										<li className="brand"><a href="#">Beoplay</a></li>
										<li className="brand"><a href="#">Google</a></li>
										<li className="brand"><a href="#">Meizu</a></li>
										<li className="brand"><a href="#">OnePlus</a></li>
										<li className="brand"><a href="#">Samsung</a></li>
										<li className="brand"><a href="#">Sony</a></li>
										<li className="brand"><a href="#">Xiaomi</a></li>
									</ul>
								</div>
							</div>

						</div>

						<div className="col-lg-9">

							{/* <!-- Shop Content --> */}

							<div className="shop_content">
								<div className="shop_bar clearfix">
									<div className="shop_product_count"><span>186</span> products found</div>
									<div className="shop_sorting">
										<span>Sort by:</span>
										<ul>
											<li>
												<span className="sorting_text">highest rated<i className="fas fa-chevron-down"></i></span>
												<ul>
													<li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }'>highest rated</li>
													<li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }'>name</li>
													<li className="shop_sorting_button" data-isotope-option='{ "sortBy": "price" }'>price</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>

								<div className="product_grid">
									<div className="product_grid_border"></div>
									<div className="owl-item ">
										<div className="d-flex justify-content-between">
											<ProductsList />
										</div>
										{/* <!-- Product Item --> */}
									</div>

								</div>
								<Pagination defaultCurrent={1} total={50} />

								{/* <!-- Shop Page Navigation --> */}

								{/* <div className="shop_page_nav d-flex flex-row">
									<div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left"></i></div>
									<ul className="page_nav d-flex flex-row">
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">...</a></li>
										<li><a href="#">21</a></li>
									</ul>
									<div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></div>
								</div> */}

							</div>

						</div>
					</div>
				</div>
			</div>

			{/* <!-- Recently Viewed-- > */}

			<div className="viewed">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="viewed_title_container">
								<h3 className="viewed_title">Recently Viewed</h3>
								<div className="viewed_nav_container">
									<div className="viewed_nav viewed_prev"><i className="fas fa-chevron-left"></i></div>
									<div className="viewed_nav viewed_next"><i className="fas fa-chevron-right"></i></div>
								</div>
							</div>

							<div className="viewed_slider_container">

								{/* <!-- Recently Viewed Slider --> */}

								<div className="owl-carousel owl-theme viewed_slider">

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_1.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$225<span>$300</span></div>
												<div className="viewed_name"><a href="#">Beoplay H7</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_2.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$379</div>
												<div className="viewed_name"><a href="#" >LUNA Smartphone</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_3.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$225</div>
												<div className="viewed_name"><a href="#">Samsung J730F...</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_4.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$379</div>
												<div className="viewed_name"><a href="#">Huawei MediaPad...</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_5.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$225<span>$300</span></div>
												<div className="viewed_name"><a href="#">Sony PS4 Slim</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>

									{/* <!-- Recently Viewed Item --> */}
									<div className="owl-item">
										<div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
											<div className="viewed_image"><img src="images/view_6.jpg" alt="" /></div>
											<div className="viewed_content text-center">
												<div className="viewed_price">$375</div>
												<div className="viewed_name"><a href="#">Speedlink...</a></div>
											</div>
											<ul className="item_marks">
												<li className="item_mark item_discount">-25%</li>
												<li className="item_mark item_new">new</li>
											</ul>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--Brands --> */}

			<div className="brands">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="brands_slider_container">

								{/* <!-- Brands Slider --> */}

								<div className="owl-carousel owl-theme brands_slider">

									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_1.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_2.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_3.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_4.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_5.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_6.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_7.jpg" alt="" /></div></div>
									<div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_8.jpg" alt="" /></div></div>

								</div>

								{/* <!-- Brands Slider Navigation --> */}
								<div className="brands_nav brands_prev"><i className="fas fa-chevron-left"></i></div>
								<div className="brands_nav brands_next"><i className="fas fa-chevron-right"></i></div>

							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--Newsletter --> */}

			<div className="newsletter">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
								<div className="newsletter_title_container">
									<div className="newsletter_icon"><img src="images/send.png" alt="" /></div>
									<div className="newsletter_title">Sign up for Newsletter</div>
									<div className="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
								</div>
								<div className="newsletter_content clearfix">
									<form action="#" className="newsletter_form">
										<input type="email" className="newsletter_input" placeholder="Enter your email address" />
										<button className="newsletter_button">Subscribe</button>
									</form>
									<div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPage