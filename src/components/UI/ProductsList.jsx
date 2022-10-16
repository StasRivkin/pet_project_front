import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({ data }) => {
    return (
        <>
            {
                data?.map((i, ind) => (
                    <ProductCard i={i} key={ind}    />
                ))
            }
        </>
    )
}

export default ProductsList