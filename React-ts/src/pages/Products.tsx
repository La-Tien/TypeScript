import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { getAll } from '../api/product';

type TProps = {
    products: IProduct[],
}

const ProductPage = (props: TProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);

      useEffect(() => {
        setProducts(props.products)
      }, [props])
    return (
        <div>
            <h1>ProductPage</h1>

            <div>
                {
                    products.map((item: IProduct, index) => {
                        return <div key={index}>
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                        </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ProductPage