import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/allCategories';
import classes from './Products.module.css';

export default function Products(){
    //console.table(allCategories);
    const productsList = allProducts.map((product)=>{
        return <div className="col-md-4">
                    <Link to={`${product.id}`} className={classes.link}>
                        <ProductCard product={product} />
                    </Link>                    
              </div>
    });
    return (
    <div>
        
        <main className="row">
            <div className='col-3'>
                sidebar content
            </div>
            <div className="grid col-9">
                <div className='row'>
                    {productsList}  
                </div>
                
            </div>
        </main>
    </div>);
}