import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, []); // Ensure useEffect runs only once when the component mounts

    return (
        <>
            {products.map((product) => (
                <div key={product.id}> {/* Ensure each child has a unique key */}
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.name} width="200" />
                </div>
            ))}
        </>
    );
}

export default Products;
