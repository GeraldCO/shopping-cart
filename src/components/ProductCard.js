import React from 'react'

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
            <div className='div-price'>
                <span>{price}</span>
            </div>
        </div>
        
    );
}