import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/allCategories';



export default function Products(){
    //console.table(allCategories);
    const productsList = allProducts.map((product)=>{
        return <Link to={`${product.id}`}>
                    <ProductCard product={product} />
              </Link>
    });
    
    return (
    <div>
        <main className="main-container">
            sidebar content
            <div className="products-main">
                {productsList}  
            </div>
        </main>
    </div>);
}