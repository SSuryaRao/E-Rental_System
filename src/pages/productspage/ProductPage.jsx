import React from 'react'
import Hero from './Hero';
import Categories from './categories';
import Products from './Products';

function ProductPage() {
    return ( 
        <div>
            <Hero />
            <Categories />
            <Products />
        </div>
     );
}

export default ProductPage;