import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interface/product'
import { getAll } from '../../api/product'

// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Card, List, Image } from 'antd';
import { Typography, } from 'antd';

const { Title, Text, Link, } = Typography;
type TProps = {
    products: IProduct[]
}

const img = {
    "overflow": "hidden"
}
const ProductsList = () => {
    const [product, setProduct] = useState<IProduct[]>([]);

    useEffect(() => {
        getAll().then(({ data }) => setProduct(data))
    }, [])
    const data = product.map((item: IProduct) => {
        console.log(item)
        return {
            key: item._id,
            name: item.name,
            price: item.price,
            images: item.images,
            desc: item.desc,

        }
    });
    return (
        <div>
            {/* <!-- Slider Item --> */}
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card  style={img}>
                            <Image src={`${item.images}`} alt="" width={200} height={250}  />

                            <h1><Link href={`/Products/${item.key}`} >{item.name} </Link></h1>

                            <Title type="danger" level={4}>{item.price} đ</Title>
                            <Text disabled>{item.desc}</Text>
                        </Card>
                    </List.Item>
                )}
            />
        </div>

		// {/* <div> */ }
    // {/* {
                // product.map((item: IProduct) => {
                //     return <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                //         <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677179181/test/gooid1uombwgiwsbpa2p.jpg" alt="" /></div>
                //         <div className="product_content">
                //             <div className="product_price discount">{item.price}<span>$300</span></div>
                //             <div className="product_name"><div><a href="product.html" >{item.name}</a></div></div>
                //             <div className="product_extras">
                //                 <div className="product_color">
                //                     <input type="radio" checked name="product_color" />
                //                     <input type="radio" name="product_color" />
                //                     <input type="radio" name="product_color" />
                //                 </div>
                //                 <button className="product_cart_button">Add to Cart</button>
                //             </div>
                //         </div>
                //         <div className="product_fav"><i className="fas fa-heart"></i></div>
                //         <ul className="product_marks">
                //             <li className="product_mark product_discount">-25%</li>
                //             <li className="product_mark product_new">new</li>
                //         </ul>
                //     </div>
                    // </div>
            //     })
            // } */}

        
    )
}

export default ProductsList