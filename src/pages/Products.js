import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import allCategories from '../data/allCategories';
import allProducts from '../data/allCategories';
import classes from './Products.module.css';


export default function Products(){
    //console.table(allCategories);
    const [categorySelected, setCategorySelected] = useState(allCategories);
    const productsList = allProducts.map((product)=>{
        return <div className="col-md-4">
                    <Link to={`${product.id}`} className={classes.link}>
                        <ProductCard product={product} />
                    </Link>                    
              </div>
    });
    const setCategory = function (){
        
    }
    return (
    <div className='container'>
        
        <main className="row">
            <div className='col-3'>
                <ul className={classes.categories}>
                    <h4>Categories</h4>
                    <li>
                        <input
                            id="all-products"
                            value="all-products"
                            type="radio"   
                            name="categories"
                            onChange={setCategory}
                        />
                        All Categories
                    </li>
                    <li>
                        <input
                            id="video-game-consoles"
                            value="video-game-consoles"
                            type="radio"
                            name="categories"
                            onChange={setCategory}
                        />
                        Video game consoles
                    </li>
                    <li>
                        <input
                            id="graphic-cards"
                            value="graphic-cards"
                            type="radio"   
                            name="categories"
                            onChange={setCategory}
                        />

                        Graphic Cards</li>
                    <li>
                        <input
                            id="laptops"
                            value="laptops"
                            type="radio"   
                            name="categories"
                            onChange={setCategory}
                        />
                        Laptops</li>
                    <li>
                        <input
                            id="pre-builts"
                            value="pre-builts"
                            type="radio"
                            name="categories"
                            onChange={setCategory}
                        />
                        Pre Builts</li>
                </ul>
            </div>
            <div className="grid col-9">
                <div className='row'>
                    {productsList}  
                </div>
                
            </div>
        </main>
    </div>);
}