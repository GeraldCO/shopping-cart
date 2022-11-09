import React from 'react';
import classes from './ProductCard.module.css';


export default function ProductCard(props){
    const {name, gallery, price} = props.product;
    return(
        <div className='product-card-container'>

            <div className='product-picture-container'>
                <img src={gallery[0]} alt="shop product" />
            </div>            
            <div>
                <h4>{name}</h4>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span> {price} </span></div>
            </div>
        </div>
    </div> */}


        </div>
        
    );
}